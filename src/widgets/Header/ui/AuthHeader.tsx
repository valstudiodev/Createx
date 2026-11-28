import '../styles/authHeader.scss';

interface AuthHeaderProps {
  className?: string;
  onLogin: () => void;
  onSignup: () => void;
}

function AuthHeader({
  className = '',
  onLogin,
  onSignup
}: AuthHeaderProps): React.JSX.Element {
  const authHeader = 'auth-header'
  return (
    <div className={`${authHeader} ${className}`}>
      <div className={`${authHeader}__login`}>
        <span
          aria-hidden='true'
          className={`${authHeader}__icon ${authHeader}__icon--icon-user`}></span>

        <button
          type='button'
          className={`${authHeader}__btn`}
          onClick={onLogin}
        >Log in
        </button>

      </div>
      <span aria-hidden='true'>/</span>

      <button
        type='button'
        className={`${authHeader}__btn`}
        onClick={onSignup}
      >
        register
      </button>

    </div>
  );
}

export default AuthHeader;