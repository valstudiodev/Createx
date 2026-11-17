import { AccordionItem } from "@/entities/event/model/event-types";
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
  teacherId: string;
  isFeatured: boolean;
}

// export interface CourseTeacherDetails {
//   position?: string;
//   specialty?: string;
//   rating?: number;
//   coursesCount?: number;
//   studentsCount?: number;
//   description?: string;
//   socialMedia?: SocialLink[]
// }

export interface CourseDetailsInfo {
  about?: string;
  learningOutcomes?: string[];
  startDate: string;
  endDate: string;
  durationMonths?: number;
  lessonsCount?: number;
  courseProgram: AccordionItem[];
}

export interface CourseFullDetails extends Course {
  details: CourseDetailsInfo;
}

export interface CreateCoursePayload {
  title: string;
  category: CourseCategory;
  price: number;
  teacherId: string;
  image: string;
  isFeatured: boolean;
  details: CourseDetailsInfo;

  // position: string;
  // specialty: string;
  // rating: number;
  // coursesCount: number;
  // studentsCount: number;
  // description: string;
  // socialMedia: SocialLink[];
  // about: string;
  // learningOutcomes?: string[];
  // startDate: string;
  // endDate: string;
  // durationMonths?: number;
  // lessonsCount?: number;
}

export interface CourseState {
  courses: CourseFullDetails[],
  course: CourseFullDetails | null,
  coursesLoading: boolean,
  courseLoading: boolean,
  courseError: string | null,
  coursesError: string | null,
}