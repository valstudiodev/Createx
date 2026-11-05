import { SuccessMessage } from '@/shared/ui/Messages';
import useSubscribe from '../../model/useSubscribe';
import './subscribe.scss';
import VisuallyHidden from '@/shared/lib/visually-hidden/VisuallyHidden';
import { SubscribeVariant } from '../../model/subscribe.types';
import AgreementCheckbox from '../../../AgreementCheckbox/AgreementCheckbox';


export interface SubscribeProps {
  variant?: SubscribeVariant;
  className?: string;
  showCheckbox?: boolean;
}

function Subscribe({
  variant = 'default',
  className = ''
}: SubscribeProps): React.JSX.Element {
  const subscribe = 'subscribe'

  const stylesMixed = [
    className,
    subscribe,
    `${subscribe}--${variant}`
  ].filter(Boolean).join(' ')

  const {
    email,
    status,
    error,
    handleEmailChange,
    handleSubmit
  } = useSubscribe()

  const loading = status === 'loading'
  const errorMessage = status === 'error'
  const success = status === 'success'
  const newsletter = variant === 'newsletter'

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <>
      <form
        className={stylesMixed}
        onSubmit={handleFormSubmit}
      >
        <label className={`${subscribe}__body`}>

          <VisuallyHidden>
            Email address
          </VisuallyHidden>

          <input
            id={`${subscribe}--email`}
            name='email'
            type="email"
            value={email}
            autoComplete='email'
            onChange={(e) => handleEmailChange(e.target.value)}
            disabled={loading || success}
            aria-invalid={errorMessage}
            aria-describedby={errorMessage ? `${subscribe}--error` : undefined}
            className={`${subscribe}__input`}
            placeholder='Your working email'
          />

          <button
            type='submit'
            disabled={loading || success}
            className={`${subscribe}__btn`}
          >
            {loading ? 'Submitting...' : 'Subscribe'}
          </button>
        </label>

        {newsletter && (
          <AgreementCheckbox text='I agree to receive communications from Createx Online School' />
        )}

        {success && (
          <SuccessMessage
            className={`${subscribe}__success-message`}
            message='Thank you for subscribing!' />
        )}

        {errorMessage && (
          <p className={`${subscribe}__error`}>{error}</p>
        )}
      </form>
    </>

  );
}

export default Subscribe;