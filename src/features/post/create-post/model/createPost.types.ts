import { PostAction, PostCategory, PostLabel } from "@/entities/post/model/post-types";
import { SocialPlatform } from "@/shared/constants/socialLinks/socialLinks.types";

export interface CreatePostPayload {
  imageId: string;
  label: PostLabel;
  category: PostCategory;
  date: string;
  duration?: string;
  title: string;
  text: string;
  action: PostAction;

  paragraphs: string[];
  quote: string;
  list: string[];
  tags: string[];
  share: SocialPlatform[]
}

export interface PostFormValues {
  imageId: string;
  label: PostLabel | '';
  category: PostCategory | '';
  date: string;
  duration?: string;
  title: string;
  text: string;
  action: PostAction | '';

  paragraphs: string[];
  quote: string;
  list: string[];
  tags: string[];
  share: SocialPlatform[]
}

export interface PostFormErrors {
  imageId?: string;
  label?: string;
  category?: string;
  date?: string;
  duration?: string;
  title?: string;
  text?: string;
  action?: string

  paragraphs?: string;
  quote?: string;
  list?: string;
  tags?: string;
  share?: string;
}