import { SubmitFormType } from "@/features/submit-form/model/submitForm.types"

export type FormSectionVariant = 'request' | 'course-registration'

export interface FormSectionProps {
  type: SubmitFormType;
  className?: string;
}

export interface FormSectionConfig {
  title: string;
  label: string;
  image: string;
}