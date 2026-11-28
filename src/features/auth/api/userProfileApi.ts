import { AuthUser } from "@/entities/user/model/user.types";
import db from "@/shared/config/firebase/firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { User } from "firebase/auth";

export async function createUserProfile(firebaseUser: User) {
  const { uid, email } = firebaseUser

  if (!email) {
    throw new Error('User email is required');
  }

  const userDocRef = doc(db, 'users', uid)

  await setDoc(userDocRef, {
    uid,
    email,
    isAdmin: false
  })

  return uid
}

export async function getUserProfile(uid: string): Promise<AuthUser | null> {
  const userDocRef = doc(db, 'users', uid)

  const userSnap = await getDoc(userDocRef)

  if (!userSnap.exists()) {
    console.log(`Document with ID ${uid} is not found!`);
    return null
  }

  const data = userSnap.data()

  return {
    uid: userSnap.id,
    email: data.email,
    role: data.role
  }
}

