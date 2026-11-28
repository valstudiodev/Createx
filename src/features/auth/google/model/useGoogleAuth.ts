import { signInWithPopup, UserCredential } from "firebase/auth"
import { createUserProfile, getUserProfile } from "../../api/userProfileApi"
import { auth, googleProvider } from "@/shared/config/firebase/firebase-config"

export async function googleSignIn(): Promise<UserCredential> {

  const result = await signInWithPopup(auth, googleProvider)

  const userProfile = await getUserProfile(result.user.uid)

  if (!userProfile) {
    await createUserProfile(result.user)
  }

  return result
}