import { User } from "@/entities/user/model/user.types";

export interface SignInFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export type AuthStatus =
  | 'idle'
  | 'loading'
  | 'authenticated'
  | 'unauthenticated'

export interface AuthState {
  user: User | null;
  status: AuthStatus;
  error: string | null;
}