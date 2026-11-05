import { CreateCoursePayload } from "@/entities/course/model/course.types";
import db from "@/shared/config/firebase/firebase-config";
import { addDoc, collection } from "firebase/firestore";



export async function createCourse(courseData: CreateCoursePayload): Promise<string> {
  const coursesCollection = collection(db, 'courses')

  const docRef = await addDoc(coursesCollection, courseData)

  return docRef.id
}