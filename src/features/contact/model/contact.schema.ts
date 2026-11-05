import { TFunction } from "i18next";
import * as yup from "yup";

export const contactFormSchema = (t: TFunction) => {
  return yup.object({
    firstName: yup
      .string()
      .trim()
      .required(t('forms.validation.name.required'))
      .min(2, t('forms.validation.name.min')),

    lastName: yup
      .string()
      .trim()
      .required(t('forms.validation.lastName.required'))
      .min(2, t('forms.validation.lastName.min')),

    email: yup
      .string()
      .trim()
      .required(t('forms.validation.email.required'))
      .email(t('forms.validation.email.invalid')),

    phone: yup
      .string()
      .trim()
      .required(t('forms.validation.phone.required'))
      .matches(
        /^\+?[0-9\s()-]{7,20}$/,
        t('forms.validation.phone.invalid')
      ),

    message: yup
      .string()
      .trim()
      .required(t('forms.validation.message.required'))
      .min(10, t('forms.validation.message.min'))
  })
}