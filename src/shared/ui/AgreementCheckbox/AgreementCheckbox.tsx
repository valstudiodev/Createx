import './agreementCheckbox.scss';

interface AgreementCheckboxProps {
  text: React.ReactNode;
  className?: string;
}

function AgreementCheckbox({
  text,
  className = ''
}: AgreementCheckboxProps): React.JSX.Element {
  const agreementCheckbox = 'agreement-checkbox'
  return (
    <label className={`${agreementCheckbox} ${className}`}>
      <input
        type="checkbox"
        required
        className={`${agreementCheckbox}__check`}
      />
      <p className={`${agreementCheckbox}__text`}>
        {text}
      </p>
    </label>
  );
}

export default AgreementCheckbox;