import * as v from 'valibot';

// Minimum time a human needs to fill in the form (ms). Faster submissions are
// treated as bots.
const MIN_FILL_TIME_MS=3000;

const bodySchema=v.object({
  name: v.pipe(v.string(), v.trim(), v.minLength(2), v.maxLength(100)),
  email: v.pipe(v.string(), v.trim(), v.email(), v.maxLength(254)),
  subject: v.pipe(v.string(), v.trim(), v.minLength(3), v.maxLength(200)),
  message: v.pipe(v.string(), v.trim(), v.minLength(10), v.maxLength(5000)),
  // honeypot: must stay empty (hidden from humans)
  website: v.optional(v.string(), ''),
  // time between form becoming interactive and submit, measured in the browser
  elapsedMs: v.optional(v.number()),
  turnstileToken: v.optional(v.pipe(v.string(), v.maxLength(2048)))
});

// Bots must not learn why they were rejected, so silent rejections look like
// a normal success response.
const silentReject=(reason: string) => {
  console.warn(`[contact] rejected submission: ${reason}`);
  return { success: true };
};

const verifyTurnstile=async (secret: string, token: string, remoteip?: string) => {
  try {
    const result=await $fetch<{ success: boolean; 'error-codes'?: string[] }>(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        body: { secret, response: token, remoteip },
        timeout: 10000
      }
    );
    if(!result.success) {
      console.warn('[contact] turnstile failed:', result['error-codes']);
    }
    return result.success;
  } catch(error) {
    console.error('[contact] turnstile verification error:', error);
    return false;
  }
};

export default defineEventHandler(async (event) => {
  // Same-origin check: browsers always send Origin on POST from our own page.
  const origin=getRequestHeader(event, 'origin');
  const host=getRequestHost(event, { xForwardedHost: true });
  if(!origin||new URL(origin).host!==host) {
    throw createError({ statusCode: 403, data: { code: 'FORBIDDEN' } });
  }

  const parsed=v.safeParse(bodySchema, await readBody(event).catch(() => null));
  if(!parsed.success) {
    throw createError({ statusCode: 400, data: { code: 'MISSING_FIELDS' } });
  }
  const body=parsed.output;

  if(body.website) return silentReject('honeypot filled');
  if(body.elapsedMs===undefined||body.elapsedMs<MIN_FILL_TIME_MS) {
    return silentReject(`filled too fast (${body.elapsedMs} ms)`);
  }

  const config=useRuntimeConfig();

  // Turnstile is enforced as soon as the secret key is configured.
  if(config.turnstileSecretKey) {
    if(!body.turnstileToken) {
      throw createError({ statusCode: 400, data: { code: 'CAPTCHA_FAILED' } });
    }
    const ip=getRequestHeader(event, 'x-nf-client-connection-ip')
      ||getRequestIP(event, { xForwardedFor: true });
    const ok=await verifyTurnstile(config.turnstileSecretKey, body.turnstileToken, ip);
    if(!ok) {
      throw createError({ statusCode: 403, data: { code: 'CAPTCHA_FAILED' } });
    }
  }

  if(!config.formspreeEndpoint) {
    throw createError({ statusCode: 500, data: { code: 'NOT_CONFIGURED' } });
  }

  const response=await fetch(config.formspreeEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      _replyto: body.email,
      _subject: body.subject
    })
  }).catch(() => null);

  if(!response?.ok) {
    console.error('[contact] formspree error:', response?.status);
    throw createError({ statusCode: 502, data: { code: 'SEND_FAILED' } });
  }

  return { success: true };
});
