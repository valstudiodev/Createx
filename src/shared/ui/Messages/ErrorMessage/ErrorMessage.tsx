import { useId } from 'react';
import './errorMessage.scss';

interface ErrorMessageProps {
  message: string;
  title?: string;
  className?: string;
}

function ErrorMessage({
  message,
  title = 'Error',
  className = ''
}: ErrorMessageProps): React.JSX.Element {
  const errorMessage = 'error-message';
  const titleId = useId();

  return (
    <div className={`${errorMessage} ${className}`} role="alert" aria-live="assertive">
      <div className={`${errorMessage}__dialog`} aria-labelledby={titleId}>
        <span className={`${errorMessage}__icon`} aria-hidden="true">
          !
        </span>
        <div className={`${errorMessage}__content`}>
          <h2 className={`${errorMessage}__title`} id={titleId}>
            {title}
          </h2>
          <p className={`${errorMessage}__text`}>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;