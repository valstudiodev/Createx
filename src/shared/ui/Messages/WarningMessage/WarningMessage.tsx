import { useId } from 'react';
import './warningMessage.scss';

interface WarningMessageProps {
  message: string;
  title?: string;
  className?: string;
}

function WarningMessage({
  message,
  title = 'Warning',
  className = ''
}: WarningMessageProps): React.JSX.Element {
  const warningMessage = 'warning-message';
  const titleId = useId();

  return (
    <div className={`${warningMessage} ${className}`} role="alert" aria-live="assertive">
      <section className={`${warningMessage}__dialog`} aria-labelledby={titleId}>
        <span className={`${warningMessage}__icon`} aria-hidden="true">!</span>
        <div className={`${warningMessage}__content`}>
          <h2 className={`${warningMessage}__title`} id={titleId}>
            {title}
          </h2>
          <p className={`${warningMessage}__text`}>{message}</p>
        </div>
      </section>
    </div>
  );
}

export default WarningMessage;