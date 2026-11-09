import { createSlice } from "@reduxjs/toolkit";
import { PostState } from "./post-types";
import { fetchLatestPosts, fetchPostById, fetchPosts, fetchRecommendedPosts } from "./postThunk";

const initialState: PostState = {
  singlePost: null,
  posts: [],
  postLoading: false,
  postsLoading: false,
  postError: null,
  postsError: null,
  latestPosts: [],
  latestPostsLoading: false,
  latestPostsError: null,
  recommendedPosts: [],
  recommendedPostsLoading: false,
  recommendedPostsError: null,
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

      .addCase(fetchLatestPosts.pending, (state) => {
        state.latestPostsLoading = true
        state.latestPostsError = null
      })
      .addCase(fetchLatestPosts.fulfilled, (state, action) => {
        state.latestPostsLoading = false
        state.latestPostsError = null
        state.latestPosts = action.payload
      })
      .addCase(fetchLatestPosts.rejected, (state, action) => {
        state.latestPostsLoading = false
        state.latestPostsError = action.payload ?? 'Failed to fetch latest posts.'
      })

      .addCase(fetchRecommendedPosts.pending, (state) => {
        state.recommendedPostsLoading = true
        state.recommendedPostsError = null
      })
      .addCase(fetchRecommendedPosts.fulfilled, (state, action) => {
        state.recommendedPostsLoading = false
        state.recommendedPostsError = null
        state.recommendedPosts = action.payload
      })
      .addCase(fetchRecommendedPosts.rejected, (state, action) => {
        state.recommendedPostsLoading = false
        state.recommendedPostsError = action.payload ?? 'Failed to fetch recommended posts.'
      })
  }
})

export default postSlice.reducer