import * as v from 'valibot';
import type { FormSubmitEvent } from '@nuxt/ui';

export const useContactForm=() => {
  const { t }=useI18n();
  const toast=useToast();

  const formSchema=v.object({
    name: v.pipe(v.string(), v.minLength(2, t('contact.form.validation.nameMin'))),
    email: v.pipe(v.string(), v.email(t('contact.form.validation.emailInvalid'))),
    subject: v.pipe(v.string(), v.minLength(3, t('contact.form.validation.subjectMin'))),
    message: v.pipe(v.string(), v.minLength(10, t('contact.form.validation.messageMin')))
  });

  type FormSchema=v.InferOutput<typeof formSchema>;

  const formState=reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const onSubmit=async (_event: FormSubmitEvent<FormSchema>) => {
    try {
      await $fetch('/api/contact', {
        method: 'POST',
        body: {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message
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
    } catch(error: any) {
      const errorCode=error.data?.code||'UNKNOWN_ERROR';
      const errorMessage=t(`contact.form.errors.${errorCode}`)||t('contact.form.error');

      toast.add({
        title: errorMessage,
        color: 'neutral',
        icon: 'i-heroicons-x-circle'
      });
    }
  };

  return {
    formState,
    formSchema,
    onSubmit
  };
};
