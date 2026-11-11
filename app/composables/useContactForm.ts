import * as v from 'valibot';
import type { FormSubmitEvent } from '@nuxt/ui';

interface ContactFormOptions {
  // resolves with a Cloudflare Turnstile token (null if unavailable)
  getCaptchaToken?: () => Promise<string|null>;
  resetCaptcha?: () => void;
}

export const useContactForm=(options: ContactFormOptions={}) => {
  const { t }=useI18n();
  const toast=useToast();

  // Spam protection: honeypot value + time the form has been on screen
  const honeypot=ref('');
  let readyAt=0;
  onMounted(() => {
    readyAt=Date.now();
  });

  const formSchema=v.object({
    name: v.pipe(v.string(), v.minLength(2, t('contact.form.validation.nameMin'))),
    email: v.pipe(v.string(), v.email(t('contact.form.validation.emailInvalid'))),
    subject: v.pipe(v.string(), v.minLength(3, t('contact.form.validation.subjectMin'))),
    message: v.pipe(v.string(), v.minLength(10, t('contact.form.validation.messageMin'))),
    privacyAccepted: v.pipe(
      v.boolean(),
      v.check((val) => val===true, t('contact.form.validation.privacyRequired'))
    )
  });

  type FormSchema=v.InferOutput<typeof formSchema>;

  const formState=reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacyAccepted: false
  });

  const onSubmit=async (_event: FormSubmitEvent<FormSchema>) => {
    try {
      const turnstileToken=options.getCaptchaToken
        ? await options.getCaptchaToken()
        :undefined;

      if(options.getCaptchaToken&&!turnstileToken) {
        throw { data: { code: 'CAPTCHA_FAILED' } };
      }

      await $fetch('/api/contact', {
        method: 'POST',
        body: {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          website: honeypot.value,
          elapsedMs: readyAt? Date.now()-readyAt:undefined,
          turnstileToken: turnstileToken??undefined
        }
      });

      toast.add({
        title: t('contact.form.success'),
        color: 'neutral',
        icon: 'i-heroicons-check-circle'
      });

      formState.name='';
      formState.email='';
      formState.subject='';
      formState.message='';
      formState.privacyAccepted=false;
      readyAt=Date.now();
    } catch(error: any) {
      const errorCode=error.data?.code||'UNKNOWN_ERROR';
      const errorMessage=t(`contact.form.errors.${errorCode}`)||t('contact.form.error');

      toast.add({
        title: errorMessage,
        color: 'neutral',
        icon: 'i-heroicons-x-circle'
      });
    } finally {
      // Turnstile tokens are single-use
      options.resetCaptcha?.();
    }
  };

  return {
    honeypot,
    formState,
    formSchema,
    onSubmit
  };
};
