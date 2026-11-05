import { RootState } from "@/app/store/store";


export const selectPosts = (state: RootState) => state.posts.posts
export const selectSinglePost = (state: RootState) => state.posts.singlePost
export const selectPostsLoading = (state: RootState) => state.posts.postsLoading
export const selectPostLoading = (state: RootState) => state.posts.postLoading
export const selectPostsError = (state: RootState) => state.posts.postsError
export const selectPostError = (state: RootState) => state.posts.postError