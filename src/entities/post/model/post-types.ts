import { SocialPlatform } from "@/shared/constants/socialLinks/socialLinks.types";

export type PostCategory =
  | 'marketing'
  | 'management'
  | 'hr'
  | 'design'
  | 'development'

export type PostAction =
  | 'listen'
  | 'watch'
  | 'read'

export type PostLabel =
  | 'podcast'
  | 'video'
  | 'article'

export interface Post {
  id: string;
  imageId: string;
  category: PostCategory;
  date: string;
  duration?: string;
  title: string;
  text: string;
  action: PostAction;
  label: PostLabel;
  isRecommended: boolean;
}

export interface PostState {
  singlePost: PostDetailsInterface | null;
  posts: Post[];
  postLoading: boolean;
  postsLoading: boolean;
  postError: string | null;
  postsError: string | null;
  latestPosts: Post[];
  latestPostsLoading: boolean;
  latestPostsError: string | null;
  recommendedPosts: Post[];
  recommendedPostsLoading: boolean;
  recommendedPostsError: string | null;
}

export interface PostDetailsInterface extends Post {
  paragraphs: string[];
  quote: string;
  list: string[];
  tags: string[];
  share: SocialPlatform[]
} 