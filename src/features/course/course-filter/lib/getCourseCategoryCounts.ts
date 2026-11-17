import { Course } from "@/entities/course/model/course.types";
import { CourseFilterCategory } from "../model/course-filter.types";

export function getCourseCategoryCounts(
  courses: Course[]
): Record<CourseFilterCategory, number> {
  const counts: Record<CourseFilterCategory, number> = {
    all: courses.length,
    marketing: 0,
    management: 0,
    hr: 0,
    design: 0,
    development: 0,
  };

  courses.forEach((course) => {
    counts[course.category]++;
  });

  return counts;
}