import { RootState } from "@/app/store/store";
import { createSelector } from "@reduxjs/toolkit";


export const selectCourses = (state: RootState) => state.courses.courses
export const selectCourse = (state: RootState) => state.courses.course
export const selectCourseLoading = (state: RootState) => state.courses.courseLoading
export const selectCoursesLoading = (state: RootState) => state.courses.coursesLoading
export const selectCourseError = (state: RootState) => state.courses.courseError
export const selectCoursesError = (state: RootState) => state.courses.coursesError
export const selectFeaturedCourses = createSelector(
  [selectCourses],
  (courses) => courses.filter((course) => course.isFeatured)
);
export const selectRecommendedCourses = createSelector(
  [
    selectCourses,
    (_state: RootState, currentCourseId: string) => currentCourseId
  ],
  (courses, currentCourseId) => {
    const currentCourse = courses.find(
      (course) => course.id === currentCourseId
    )

    if (!currentCourse) return []

    return courses
      .filter(
        (course) =>
          course.id !== currentCourseId &&
          course.category === currentCourse?.category
      )
      .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
      .slice(0, 4)
  }
)