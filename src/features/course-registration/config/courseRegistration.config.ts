import { CourseRegistrationFormField } from "../model/courseRegistration.types";


export const courseRegistrationFormFields: CourseRegistrationFormField[] = [
  {
    name: 'fullName',
    type: 'text',
    placeholder: 'submitForm.name.placeholder',
    label: 'submitForm.name.label'
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'submitForm.email.placeholder',
    label: 'submitForm.email.label'
  },
  {
    name: 'phone',
    type: 'tel',
    placeholder: 'submitForm.phone.placeholder',
    label: 'submitForm.phone.label'
  }
]