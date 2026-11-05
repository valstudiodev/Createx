import { useTranslation } from 'react-i18next';
import './submitForm.scss';
import { useForm } from 'react-hook-form';
import { useEffect, useMemo, useState } from 'react';
import { submitFormSchema } from '../model/submitForm.schema';
import { SubmitFormType, SubmitFormValues } from '../model/submitForm.types';
import { RequestStatus } from '@/shared/types/types';
import { createFormSubmissions } from '../api/submitFormService';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage, SuccessMessage } from '@/shared/ui/Messages';
import { submitFormFields } from '../config/submitForm.config';


interface SubmitFormProps {
  className?: string;
  type: SubmitFormType;
}

function SubmitForm({
  className = '',
  type
}: SubmitFormProps): React.JSX.Element {
  const submitForm = 'submit-form'

  const { t } = useTranslation()
  const [status, setStatus] = useState<RequestStatus>('idle');
  const success = status === 'success'

  const schema = useMemo(
    () => submitFormSchema(t),
    [t]
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<SubmitFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  })

  const onSubmit = async (data: SubmitFormValues): Promise<void> => {
    setStatus('loading')

    try {
      await createFormSubmissions(data, type)
      setStatus('success')
      reset()

    } catch (error) {
      setStatus('error')

      console.error('Form submission failed:', error);
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
      className={`${submitForm} ${className}`}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className={`${submitForm}__body`}>
        {submitFormFields.map((field) => (
          <label
            key={field.name}
            className={`${submitForm}__field`}>
            <span className={`${submitForm}__label`}>
              {t(field.label)}
            </span>
            <input
              type={field.type}
              placeholder={field.placeholder ? t(field.placeholder) : ''}
              {...register(field.name)}
              aria-invalid={Boolean(errors[field.name])}
              className={`${submitForm}__input`}
            />
            {errors[field.name] && (
              <p className={`${submitForm}__error`}>
                {errors[field.name]?.message}
              </p>
            )}
          </label>
        ))}
      </div>


      <button
        type='submit'
        className={`${submitForm}__btn`}
        disabled={isSubmitting}
      >
        {isSubmitting
          ? t('common.submitting')
          : type === 'request'
            ? t('buttons.joinEvent')
            : t('buttons.joinCourse')}
      </button>

      {success && (
        <SuccessMessage message={t(
          type === 'request'
            ? 'messages.requestSuccess'
            : 'messages.courseRegistrationSuccess'
        )} />
      )}

      {status === 'error' && (
        <ErrorMessage message={t('messages.error')} />
      )}
    </form>
  );
}

export default SubmitForm;