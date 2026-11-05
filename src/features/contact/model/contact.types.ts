import { Timestamp } from "firebase/firestore";

export type ContactFormFieldName =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phone'
  | 'message'

export type ContactFormFieldType =
  | 'text'
  | 'tel'
  | 'email'
  | 'textarea'

export type ContactFormFieldGroup =
  | 'personal'
  | 'contact'
  | 'full'

export interface ContactFormField {
  name: ContactFormFieldName,
  type: ContactFormFieldType,
  label: string;
  placeholder: string;
  group: ContactFormFieldGroup;
}

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormData extends ContactFormValues {
  createdAt: Timestamp | null;
}