import { RootState } from "@/app/store/store";


export const selectCourses = (state: RootState) => state.courses.courses
export const selectCourse = (state: RootState) => state.courses.course
export const selectCourseLoading = (state: RootState) => state.courses.courseLoading
export const selectCoursesLoading = (state: RootState) => state.courses.coursesLoading
export const selectCourseError = (state: RootState) => state.courses.courseError
export const selectCoursesError = (state: RootState) => state.courses.coursesError