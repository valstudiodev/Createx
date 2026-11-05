import { ContactFormField } from "../model/contact.types";


export const contactsFormFields: ContactFormField[] = [
  {
    name: 'firstName',
    type: 'text',
    label: 'contactForm.firstName.label',
    placeholder: 'contactForm.firstName.placeholder',
    group: 'personal',
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'contactForm.lastName.label',
    placeholder: 'contactForm.lastName.placeholder',
    group: 'personal'
  },
  {
    name: 'email',
    type: 'email',
    label: 'contactForm.email.label',
    placeholder: 'contactForm.email.placeholder',
    group: 'contact',
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'contactForm.phone.label',
    placeholder: 'contactForm.phone.placeholder',
    group: 'contact',
  },
  {
    name: 'message',
    type: 'textarea',
    label: 'contactForm.message.label',
    placeholder: 'contactForm.message.placeholder',
    group: 'full',
  }
]