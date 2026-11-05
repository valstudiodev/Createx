export type SubscribeVariant = 'default' | 'newsletter'

export interface SubscribeProps {
  variant?: SubscribeVariant;
  className?: string;
  showCheckbox?: boolean;
}