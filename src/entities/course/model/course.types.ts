import { SocialLink } from "@/shared/constants/socialLinks/socialLinks.types";

export type CourseCategory =
  | 'marketing'
  | 'management'
  | 'hr'
  | 'design'
  | 'development'

export interface Course {
  id: string;
  image?: string;
  category: CourseCategory;
  title: string;
  price: number;
  teacherName: string;
}

export interface CourseDetailsInterface extends Course {
  position?: string;
  specialty?: string;
  rating?: number;
  coursesCount?: number;
  studentsCount?: number;
  description?: string;
  socialMedia?: SocialLink[]
}