import { Link } from "react-router";
import { ButtonBaseProps } from "../model/buttonBasic.types";
import '../styles/buttonBasic.scss';

function ButtonBasic({
  size = 'regular',
  type = 'button',
  children,
  className = '',
  to,
  ...props
}: ButtonBaseProps) {
  const buttonBasic = `button-basic button-basic--${size} ${className}`.trim()

  if (type === 'link') {
    return (
      <Link
        to={to ?? '/'}
        className={buttonBasic}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type="button"
      className={buttonBasic}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonBasic;