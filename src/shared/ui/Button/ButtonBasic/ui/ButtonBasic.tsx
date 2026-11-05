import { Link } from "react-router";
import { ButtonBaseProps } from "../model/buttonBasic.types";
import '../styles/buttonBasic.scss';

function ButtonBasic({
  size = 'regular',
  type = 'button',
  variant = 'primary',
  children,
  leftIcon,
  rightIcon,
  className = '',
  to,
  ...props
}: ButtonBaseProps) {
  const buttonBasic = [
    'button-basic',
    `button-basic--${size}`,
    `button-basic--${variant}`,
    className
  ].filter(Boolean).join(' ')

  if (type === 'link') {
    return (
      <Link
        to={to ?? '/'}
        className={buttonBasic}
      >
        {leftIcon && (
          <span className={`${buttonBasic}__icon`}>
            {leftIcon}
          </span>
        )}
        {children}
        {rightIcon && (
          <span className={`${buttonBasic}__icon`}>
            {rightIcon}
          </span>
        )}
      </Link>
    )
  }

  return (
    <button
      type="button"
      className={buttonBasic}
      {...props}
    >
      {leftIcon && (
        <span className={`${buttonBasic}__icon`}>
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span className={`${buttonBasic}__icon`}>
          {rightIcon}
        </span>
      )}
    </button>
  );
}

export default ButtonBasic;