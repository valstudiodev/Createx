import { CourseCategory } from "../model/course.types";

interface CategoryConfig {
  label: string;
  background: string;
  color: string;
}

export const coursesCategoryConfig: Record<CourseCategory, CategoryConfig> = {
  marketing: {
    label: 'marketing',
    background: '#03CEA4',
    color: '#fff'
  },
  management: {
    label: 'management',
    background: '#5A87FC',
    color: '#fff'
  },
  hr: {
    label: 'HR & Recruting',
    background: '#F89828',
    color: '#fff'
  },
  design: {
    label: 'Design',
    background: '#F52F6E',
    color: '#fff'
  },
  development: {
    label: 'Development',
    background: '#7772F1',
    color: '#fff'
  }
}