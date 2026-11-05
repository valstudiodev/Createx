import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostById, getPosts } from "../api/postService";
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