
interface LogoutButtonProps {
  className?: string;
}

function LogoutButton({
  className = ''
}: LogoutButtonProps): React.JSX.Element {
  const logoutButton = 'logout-button'
  return (
    <button
      className={`${logoutButton} ${className}`}
      type="button"

    ></button>
  );
}

export default LogoutButton;