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

export interface CourseTeacherDetails {
  position?: string;
  specialty?: string;
  rating?: number;
  coursesCount?: number;
  studentsCount?: number;
  description?: string;
  socialMedia?: SocialLink[]
}

export interface CourseDetailsInfo extends Course {
  about?: string;
  learningOutcomes?: string[];
  startDate?: string;
  endDate?: string;
  durationMonths?: number;
  lessonsCount?: number;
}

export interface CourseFullDetails extends CourseTeacherDetails, CourseDetailsInfo { }

export interface CreateCoursePayload {
  title: string;
  category: CourseCategory;
  price: number;
  teacherName: string;
  image: string;
  position: string;
  specialty: string;
  rating: number;
  coursesCount: number;
  studentsCount: number;
  description: string;
  socialMedia: SocialLink[];
  about: string;
  learningOutcomes?: string[];
  startDate?: string;
  endDate?: string;
  durationMonths?: number;
  lessonsCount?: number;
}

export interface CourseState {
  courses: CourseFullDetails[],
  course: CourseFullDetails | null,
  coursesLoading: boolean,
  courseLoading: boolean,
  courseError: string | null,
  coursesError: string | null,
}