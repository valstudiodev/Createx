import { auth } from "@/shared/config/firebase/firebase-config";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

export async function login(email: string, password: string): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth, email, password)
}