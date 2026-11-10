import { createAsyncThunk } from "@reduxjs/toolkit";
import { CourseFullDetails } from "./course.types";
import { getCourseById, getCourses } from "../api/courseService";


export const fetchCourses = createAsyncThunk<CourseFullDetails[], void, { rejectValue: string }>(
  'courses/fetchCourses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCourses()
      return response

    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Failed to fetch courses.')
    }
  }
)

export const fetchCourseById = createAsyncThunk<CourseFullDetails | null, { courseId: string }, { rejectValue: string }>(
  'courses/fetchCourseById',
  async ({ courseId }, thunkApi) => {
    try {
      const response = await getCourseById(courseId)
      return response
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message)
      }
      return thunkApi.rejectWithValue('Failed to fetch course by ID.')
    }
  }
)