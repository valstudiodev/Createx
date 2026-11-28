import { auth } from "@/shared/config/firebase/firebase-config";
import { signOut } from "firebase/auth";

export async function logout(): Promise<void> {
  await signOut(auth)
}