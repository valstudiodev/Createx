import { Timestamp } from "firebase/firestore";

export type CourseRegistrationFormFieldName =
  | 'fullName'
  | 'email'
  | 'phone'

export type CourseRegistrationFormFieldType = 'text' | 'tel' | 'email'

export interface CourseRegistrationFormField {
  name: CourseRegistrationFormFieldName;
  type: CourseRegistrationFormFieldType;
  label: string;
  placeholder: string;
}

export interface CourseRegistrationFormValues {
  fullName: string;
  email: string;
  phone: string;
}

export interface CourseRegistrationFormData extends CourseRegistrationFormValues {
  courseId: string;
  createdAt: Timestamp | null;
}

export interface CreateCourseRegistrationParams {
  values: CourseRegistrationFormValues;
  courseId: string;
}