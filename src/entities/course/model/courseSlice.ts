import { createSlice } from "@reduxjs/toolkit";
import { CourseState } from "./course.types";
import { fetchCourseById, fetchCourses } from "./courseThunk";


const initialState: CourseState = {
  courses: [],
  course: null,
  coursesLoading: false,
  courseLoading: false,
  courseError: null,
  coursesError: null,
}

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.coursesLoading = true
        state.coursesError = null
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.coursesLoading = false
        state.coursesError = null
        state.courses = action.payload
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.coursesLoading = false
        state.coursesError = action.payload ?? 'Failed to fetch courses.'
      })


      .addCase(fetchCourseById.pending, (state) => {
        state.courseLoading = true
        state.courseError = null
        state.course = null
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.courseLoading = false
        state.courseError = null
        state.course = action.payload
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.courseLoading = false
        state.courseError = action.payload ?? 'Failed to fetch course by ID.'
      })
  }
})

export default courseSlice.reducer