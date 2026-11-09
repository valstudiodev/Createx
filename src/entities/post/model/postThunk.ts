import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLatestPosts, getPostById, getPosts, getRecommendedPosts } from "../api/postService";
import { Post, PostDetailsInterface } from "./post-types";


export const fetchPosts = createAsyncThunk<Post[], void, { rejectValue: string }>(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPosts()
      return response
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Failed to fetch posts.')
    }
  }
)

export const fetchLatestPosts = createAsyncThunk<Post[], void, { rejectValue: string }>(
  'posts/fetchLatestPosts',
  async (_, { rejectWithValue }) => {
    try {
      return await getLatestPosts()
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Failed to fetch latest posts.')
    }
  }
)

export const fetchRecommendedPosts = createAsyncThunk<Post[], void, { rejectValue: string }>(
  'posts/fetchRecommendedPosts',
  async (_, { rejectWithValue }) => {
    try {
      return await getRecommendedPosts()
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Failed to fetch recommended posts.')
    }
  }
)

export const fetchPostById = createAsyncThunk<PostDetailsInterface | null, { postId: string }, { rejectValue: string }>(
  'posts/fetchPostById',
  async ({ postId }, thunkApi) => {
    try {
      const response = await getPostById(postId)
      return response
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message)
      }
      return thunkApi.rejectWithValue('Failed to fetch post by ID.')
    }
  }
)