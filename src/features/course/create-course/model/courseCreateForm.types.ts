import { CourseCategory } from "@/entities/course/model/course.types";
import { AccordionItem } from "@/entities/event/model/event-types";
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
  courseProgram: AccordionItem[];

  about: string;
  learningOutcomes?: string[];
  startDate: string;
  endDate: string;
  durationMonths: string;
  lessonsCount: string;
  isFeatured: boolean
}