import { addDoc, collection } from "firebase/firestore";
import { CreatePostPayload } from "../model/createPost.types";
import db from "@/shared/config/firebase/firebase-config";

export async function createPost(postData: CreatePostPayload): Promise<string> {
  const postsCollection = collection(db, 'posts')

  const docRef = await addDoc(postsCollection, postData)

  return docRef.id
}