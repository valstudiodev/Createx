import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { CreateCourseRegistrationParams } from "../model/courseRegistration.types";
import db from "@/shared/config/firebase/firebase-config";


export async function createCourseRegistration({ values, courseId }: CreateCourseRegistrationParams): Promise<string> {
  const coursesRegistrationCollection = collection(db, 'coursesRegistration')

  const docRef = await addDoc(coursesRegistrationCollection, {
    ...values,
    courseId,
    createdAt: serverTimestamp()
  })

  return docRef.id
}