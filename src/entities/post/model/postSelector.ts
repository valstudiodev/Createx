import { RootState } from "@/app/store/store";


export const selectPosts = (state: RootState) => state.posts.posts
export const selectSinglePost = (state: RootState) => state.posts.singlePost
export const selectPostsLoading = (state: RootState) => state.posts.postsLoading
export const selectPostLoading = (state: RootState) => state.posts.postLoading
export const selectPostsError = (state: RootState) => state.posts.postsError
export const selectPostError = (state: RootState) => state.posts.postError
export const selectLatestPosts = (state: RootState) => state.posts.latestPosts
export const selectLatestPostsLoading = (state: RootState) => state.posts.latestPostsLoading
export const selectLatestPostsError = (state: RootState) => state.posts.latestPostsError
export const selectRecommendedPosts = (state: RootState) => state.posts.recommendedPosts
export const selectRecommendedPostsLoading = (state: RootState) => state.posts.recommendedPostsLoading
export const selectRecommendedPostsError = (state: RootState) => state.posts.recommendedPostsError