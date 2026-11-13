import { RootState } from "@/app/store/store";
import { createSelector } from "@reduxjs/toolkit";
import { Post } from "./post-types";


export const selectPosts = (state: RootState) => state.posts.posts
export const selectSinglePost = (state: RootState) => state.posts.singlePost
export const selectPostsLoading = (state: RootState) => state.posts.postsLoading
export const selectPostLoading = (state: RootState) => state.posts.postLoading
export const selectPostsError = (state: RootState) => state.posts.postsError
export const selectPostError = (state: RootState) => state.posts.postError
export const selectLatestPosts = (state: RootState) => state.posts.latestPosts
export const selectLatestPostsLoading = (state: RootState) => state.posts.latestPostsLoading
export const selectLatestPostsError = (state: RootState) => state.posts.latestPostsError
export const selectRecommendedPostsLoading = (state: RootState) => state.posts.recommendedPostsLoading
export const selectRecommendedPostsError = (state: RootState) => state.posts.recommendedPostsError
// export const selectPostsHasLoaded = (state: RootState) => state.posts.postsHasLoaded

export const selectRecommendedPosts = createSelector(
  [
    selectPosts,
    (_state: RootState, currentPostId: string) => currentPostId
  ],
  (posts, currentPostId) => {
    const currentPost = posts.find(
      (post) => post.id === currentPostId
    )

    if (!currentPost) return []

    const sortByDate = (a: Post, b: Post): number => b.date.localeCompare(a.date)

    const availablePosts = posts.filter(
      (post) => post.id !== currentPost.id
    )

    const sameCategoryPosts = posts
      .filter(
        (post) =>
          post.id !== currentPostId &&
          post.category === currentPost.category
      ).sort(sortByDate)

    const otherCategoryPosts = availablePosts
      .filter(
        (post) =>
          post.id !== currentPostId &&
          post.category !== currentPost.category
      ).sort(sortByDate)

    return [...sameCategoryPosts, ...otherCategoryPosts].slice(0, 6)

  }
)