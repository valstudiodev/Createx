import { createSlice } from "@reduxjs/toolkit";
import { PostState } from "./post-types";
import { fetchPostById, fetchPosts } from "./postThunk";

const initialState: PostState = {
  singlePost: null,
  posts: [],
  postLoading: false,
  postsLoading: false,
  postError: null,
  postsError: null,
}


export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.postsLoading = true
        state.postsError = null
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.postsLoading = false
        state.postsError = null
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.postsLoading = false
        state.postsError = action.payload ?? 'Failed to fetch posts.'
      })


      .addCase(fetchPostById.pending, (state) => {
        state.postLoading = true
        state.postError = null
        state.singlePost = null
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.postLoading = false
        state.postError = null
        state.singlePost = action.payload
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.postLoading = false
        state.postError = action.payload ?? 'Failed to fetchpost by ID.'
      })
  }
})

export default postSlice.reducer