import { RequestStatus } from "@/shared/types/types";

export type SubscribeVariant = 'default' | 'newsletter' | 'compact'

export interface SubscribeProps {
  email: string;
  onEmailChange: (email: string) => void;
  onSubmit: () => void;
  status: RequestStatus;
  error: string | null;
  className?: string;
}