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
    label: 'marketing',
    background: '#5A87FC',
    color: '#fff'
  },
  hr: {
    label: 'marketing',
    background: '#F89828',
    color: '#fff'
  },
  design: {
    label: 'marketing',
    background: '#F52F6E',
    color: '#fff'
  },
  development: {
    label: 'marketing',
    background: '#7772F1',
    color: '#fff'
  }
}