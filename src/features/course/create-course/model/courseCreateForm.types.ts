import { CourseCategory } from "@/entities/course/model/course.types";
import { SocialPlatform } from "@/shared/constants/socialLinks/socialLinks.types";

export interface CourseFormValues {
  title: string;
  category: CourseCategory | '';
  price: string;
  teacherName: string;
  image: string;
  position: string;
  specialty: string;
  rating: string;
  coursesCount: string;
  studentsCount: string;
  description: string;
  socialMedia: SocialPlatform[];

  about: string;
  learningOutcomes?: string[];
  startDate?: string;
  endDate?: string;
  durationMonths?: number;
  lessonsCount?: number;
}