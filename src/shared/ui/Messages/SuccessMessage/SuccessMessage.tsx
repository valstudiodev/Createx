import './successMessage.scss';

interface SuccessMessageProps {
  message: string;
  title?: string;
  className?: string;
}

function SuccessMessage({
  message,
  title = 'Success',
  className = ''
}: SuccessMessageProps): React.JSX.Element {
  const successMessage = 'success-message';

  return (
    <div className={`${successMessage} ${className}`} role="status" aria-live="polite">
      <section className={`${successMessage}__dialog`}>
        <span className={`${successMessage}__icon`} aria-hidden="true">
          ✓
        </span>
        <div className={`${successMessage}__content`}>
          <h2 className={`${successMessage}__title`}>{title}</h2>
          <p className={`${successMessage}__text`}>{message}</p>
        </div>
      </section>
    </div>
  );
}

export default SuccessMessage;