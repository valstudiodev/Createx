import { ButtonHTMLAttributes } from "react";
import { LinkProps } from "react-router";


export type ButtonSize = 'large' | 'regular' | 'small'

export type ButtonBaseType = 'button' | 'link' | 'reset' | 'submit' | 'desabled'

export type ButtonVariant = 'primary' | 'secondary'

export type ButtonBaseProps = {
  size?: ButtonSize;
  type?: ButtonBaseType;
  className?: string;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  to?: LinkProps['to'];
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'className' | 'children'>;
