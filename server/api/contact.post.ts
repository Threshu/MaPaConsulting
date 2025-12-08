export default defineEventHandler(async (event) => {
  try {
    const body=await readBody(event);

    if(!body.name||!body.email||!body.subject||!body.message) {
      throw createError({
        statusCode: 400,
        data: { code: 'MISSING_FIELDS' }
      });
    }

    const config=useRuntimeConfig();
    const formspreeEndpoint=config.formspreeEndpoint;

    if(!formspreeEndpoint) {
      throw createError({
        statusCode: 500,
        data: { code: 'NOT_CONFIGURED' }
      });
    }

    const response=await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
        _replyto: body.email,
        _subject: body.subject
      })
    });

    if(!response.ok) {
      throw createError({
        statusCode: response.status,
        data: { code: 'SEND_FAILED' }
      });
    }

    return { success: true };
  } catch(error: any) {
    throw createError({
      statusCode: error.statusCode||500,
      data: error.data||{ code: 'UNKNOWN_ERROR' }
    });
  }
});
