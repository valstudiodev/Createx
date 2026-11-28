import { AuthUser } from "@/entities/user/model/user.types";

export interface SignInFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export type AuthStatus =
  | 'idle'
  | 'loading'
  | 'authenticated'
  | 'unauthenticated'

export interface AuthState {
  user: AuthUser | null;
  status: AuthStatus;
  initialized: boolean;
  error: string | null;
}

// export interface AuthState {
//   user: AuthUser | null,
//   initialized: boolean;
// }