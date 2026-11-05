import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { CourseFullDetails } from "../model/course.types";
import db from "@/shared/config/firebase/firebase-config";


export async function getCourses(): Promise<CourseFullDetails[]> {
  const coursesCollection = collection(db, 'courses')
  const snapshot = await getDocs(coursesCollection)

  const courses: CourseFullDetails[] = []

  snapshot.forEach((doc) => {
    const course: CourseFullDetails = {
      id: doc.id,
      ...(doc.data() as Omit<CourseFullDetails, 'id'>)
    }

    courses.push(course)
  });

  return courses
}


export async function getCourseById(courseId: string): Promise<CourseFullDetails | null> {
  const courseDocRef = doc(db, 'courses', courseId)

  const courseSnap = await getDoc(courseDocRef)

  if (!courseSnap.exists()) {
    console.log(`Document with ID ${courseId} is not found!`);
    return null
  }

  const courseData = courseSnap.data() as Omit<CourseFullDetails, 'id'>

  return {
    id: courseSnap.id,
    ...courseData
  }
}