import { CourseCategory } from "@/entities/course/model/course.types";
import { AccordionItem } from "@/entities/event/model/event-types";

export interface CourseFormValues {
  title: string;
  category: CourseCategory | '';
  price: string;
  teacherId: string;
  image: string;
  courseProgram: AccordionItem[];

  about: string;
  learningOutcomes?: string[];
  startDate: string;
  endDate: string;
  durationMonths: string;
  lessonsCount: string;
  isFeatured: boolean
}