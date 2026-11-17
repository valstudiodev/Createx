export type CourseFilterCategory =
  | 'all'
  | 'marketing'
  | 'management'
  | 'hr'
  | 'design'
  | 'development'

export interface CourseFilterCategoryProps {
  label: string;
  category: CourseFilterCategory
}

