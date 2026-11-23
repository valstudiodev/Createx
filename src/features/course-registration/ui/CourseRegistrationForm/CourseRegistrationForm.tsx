import { useEffect, useMemo, useState } from 'react';
import './courseRegistrationForm.scss';
import { RequestStatus } from '@/shared/types/types';
import { courseRegistrationFormSchema } from '../../model/courseRegistration.schema';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { CourseRegistrationFormValues } from '../../model/courseRegistration.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { createCourseRegistration } from '../../api/createCourseRegistration';
import { courseRegistrationFormFields } from '../../config/courseRegistration.config';
import { SuccessMessage } from '@/shared/ui/Messages';

interface CourseRegistrationFormProps {
  courseId: string;
  className?: string;
}

function CourseRegistrationForm({
  courseId,
  className = ''
}: CourseRegistrationFormProps): React.JSX.Element {
  const courseRegistrationForm = 'course-registration-form'

  const { t } = useTranslation()

  const [status, setStatus] = useState<RequestStatus>('idle');
  const success = status === 'success'
  // const error = status === 'error'

  const schema = useMemo(
    () => courseRegistrationFormSchema(t),
    [t]
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<CourseRegistrationFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: ''
    }
  })

  const onSubmit = async (values: CourseRegistrationFormValues): Promise<void> => {
    setStatus('loading')

    try {
      await createCourseRegistration({
        values,
        courseId
      })
      setStatus('success')
      reset()
    } catch (error) {
      console.log('Courses registration failed:', error);
      setStatus('error')
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
      onSubmit={handleSubmit(onSubmit)}
      className={`${courseRegistrationForm} ${className}`}>
      <div className={`${courseRegistrationForm}__body`}>
        {courseRegistrationFormFields.map((field) => (
          <div
            key={field.name}
            className={`${courseRegistrationForm}__field`}>
            <label
              htmlFor={field.name}
              className={`${courseRegistrationForm}__label`}
            >
              {t(field.label)}
            </label>
            <input
              id={field.name}
              type={field.type}
              placeholder={t(field.placeholder)}
              {...register(field.name)}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={
                errors[field.name] ? `${field.name}-error` : undefined
              }
              className={`${courseRegistrationForm}__input`}
            />
            {errors[field.name] && (
              <p
                id={`${field.name}-error`}
                role="alert"
                className={`${courseRegistrationForm}__error`}>
                {errors[field.name]?.message}
              </p>
            )}
          </div>
        ))}

        <button
          type='submit'
          className={`${courseRegistrationForm}__btn`}
          disabled={isSubmitting}
        >
          {isSubmitting
            ? t('buttons.sending') : t('buttons.joinCourse')
          }
        </button>
      </div>

      {success && (
        <SuccessMessage message='' />
      )}

    </form>
  );
}

export default CourseRegistrationForm;