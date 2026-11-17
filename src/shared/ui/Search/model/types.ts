import { InputHTMLAttributes } from "react";

export interface SearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> {
  value: string;
  className?: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  debounceTime?: number;
  label?: string;
}