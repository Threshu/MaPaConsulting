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
    toast.add({
      title: t('contact.form.success'),
      color: 'primary',
      icon: 'i-heroicons-check-circle'
    });

    formState.name='';
    formState.email='';
    formState.subject='';
    formState.message='';
  };

  return {
    formState,
    formSchema,
    onSubmit
  };
};
