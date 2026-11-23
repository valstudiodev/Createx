import { User } from "@/entities/user/model/user.types";


export interface SignInCredentials {
  email: string;
  password: string;
  rememberMe: boolean;
}

export type AuthUserCallback = (user: User | null) => void;

export type UnsubscribeAuth = () => void;