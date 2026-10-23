import { ButtonHTMLAttributes } from "react";
import { LinkProps } from "react-router";


export type ButtonSize = 'large' | 'regular' | 'small'

export type ButtonBaseType = 'button' | 'link'

export type ButtonBaseProps = {
  size?: ButtonSize;
  type?: ButtonBaseType;
  className?: string;
  children?: React.ReactNode;
  to?: LinkProps['to'];
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'className' | 'children'>;
