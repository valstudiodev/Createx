import { PostCategory, PostLabel } from "@/entities/post/model/post-types";

export type PostTypeFilterParams = 'all' | PostLabel

export interface PostFilters {
  type: PostTypeFilterParams;
  category: PostCategory | 'all';
  seacrh: string;
}

export const initialPostFilters: PostFilters = {
  type: 'all',
  category: 'all',
  seacrh: ''
}