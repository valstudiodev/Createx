import { Timestamp } from "firebase/firestore";

export type SubmitFormFieldName = 'name' | 'email' | 'phone'

export type SubmitFormFieldType = 'text' | 'email' | 'tel'

export type SubmitFormType = 'request' | 'course-registration'

export type SubmissionStatus = 'new' | 'processed'

export interface SubmitFormField {
  name: SubmitFormFieldName,
  type: SubmitFormFieldType,
  label: string;
  placeholder?: string;
}

export interface SubmitFormValues {
  name: string;
  email: string;
  phone: string;
}

export interface SubmitFormData extends SubmitFormValues {
  type: SubmitFormType,
  status: SubmissionStatus,
  createdAt: Timestamp | null;
}