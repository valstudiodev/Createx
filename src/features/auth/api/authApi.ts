import { AuthUser } from "@/entities/user/model/user.types";
import { auth } from "@/shared/config/firebase/firebase-config";
import { onAuthStateChanged, User } from "firebase/auth";

export interface SignInCredentials {
  email: string;
  password: string;
  rememberMe: boolean;
}

export type AuthUserCallback = (user: AuthUser | null) => void;

export type UnsubscribeAuth = () => void;

function subscribeToAuthState(
  callback: (user: User | null) => void,
): () => void {
  const unsubscribe = onAuthStateChanged(
    auth,
    (user: User | null) => {
      callback(user);
    },
  );

  return unsubscribe;
}

export default subscribeToAuthState