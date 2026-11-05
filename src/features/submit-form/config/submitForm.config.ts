import { SubmitFormField } from "../model/submitForm.types";


export const submitFormFields: SubmitFormField[] = [
  {
    name: 'name',
    type: 'text',
    label: 'submitForm.name.label',
    placeholder: 'submitForm.name.placeholder'
  },
  {
    name: 'email',
    type: 'email',
    label: 'submitForm.email.label',
    placeholder: 'submitForm.email.placeholder'
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'submitForm.phone.label',
    placeholder: 'submitForm.phone.placeholder'
  }
]