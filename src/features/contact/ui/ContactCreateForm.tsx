import { useTranslation } from 'react-i18next';
import './contactCreateForm.scss';
import { useEffect, useMemo, useState } from 'react';
import { RequestStatus } from '@/shared/types/types';
import { contactFormSchema } from '../model/contact.schema';
import { useForm } from 'react-hook-form';
import { ContactFormFieldGroup, ContactFormValues } from '../model/contact.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { createContact } from '../api/createContactService';
import { contactsFormFields } from '../config/contact.config';
import { ErrorMessage, SuccessMessage } from '@/shared/ui/Messages';
import AgreementCheckbox from '@/shared/ui/AgreementCheckbox/AgreementCheckbox';

interface ContactCreateFormProps {
  className?: string;
}

function ContactCreateForm({
  className = ''
}: ContactCreateFormProps): React.JSX.Element {
  const contactCreateForm = 'contact-create-form'

  const fieldsGroup: ContactFormFieldGroup[] = [
    'personal',
    'contact',
    'full'
  ]

  const { t } = useTranslation()
  const [status, setStatus] = useState<RequestStatus>('idle');
  const success = status === 'success'
  const error = status === 'error'

  const schema = useMemo(
    () => contactFormSchema(t),
    [t]
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
  })

  const onSubmit = async (values: ContactFormValues): Promise<void> => {
    setStatus('loading')

    try {
      await createContact(values)
      setStatus('success')
      reset()
    } catch (error) {
      setStatus('error')

      console.log('Contacts form failed:', error);

    }
  }

  useEffect(() => {
    if (status !== 'success' && status !== 'error') return

    const timer = setTimeout(() => {
      setStatus('idle')
    }, 3000);

    return () => {
      clearTimeout(timer)
    }

  }, [status]);

  return (
    <form
      className={`${contactCreateForm} ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      {fieldsGroup.map((group) => (
        <div
          key={group}
          className={`${contactCreateForm}__group ${contactCreateForm}__group--${group}`}
        >
          {contactsFormFields
            .filter((field) => field.group === group)
            .map((field) => (
              <div
                key={field.name}
                className={`${contactCreateForm}__field`}
              >
                <label
                  key={field.name}
                  className={`${contactCreateForm}__field`}
                >
                  <span className={`${contactCreateForm}__label`}>
                    {t(field.label)}
                  </span>
                  {field.type === 'textarea' ? (
                    <textarea
                      {...register(field.name)}
                      placeholder={t(field.placeholder)}
                      className={`${contactCreateForm}__textarea`}
                    >

                    </textarea>
                  ) : (
                    <input
                      type={field.type}
                      placeholder={t(field.placeholder)}
                      aria-invalid={Boolean(errors[field.name])}
                      {...register(field.name)}
                      className={`${contactCreateForm}__input`}
                    />
                  )}
                  {errors[field.name] && (
                    <p className={`${contactCreateForm}__error`}>
                      {errors[field.name]?.message}
                    </p>
                  )}
                </label>
              </div>
            ))}
        </div>
      ))}

      <div className={`${contactCreateForm}__actions`}>
        <AgreementCheckbox
          text={t('forms.agreements.communications')}
          className={`${contactCreateForm}__checkbox`}
        />
        <button
          type='submit'
          className={`${contactCreateForm}__btn`}
          disabled={isSubmitting}
        >
          {isSubmitting
            ? t('buttons.sending') : t('buttons.sendMessage')
          }
        </button>
      </div>

      {success && (
        <SuccessMessage message={t('messages.messageSent')} />
      )}

      {error && (
        <ErrorMessage message={t('messages.messageSendError')} />
      )}
    </form>
  );
}

export default ContactCreateForm;