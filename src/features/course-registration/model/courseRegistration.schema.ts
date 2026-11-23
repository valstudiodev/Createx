import { TFunction } from "i18next";
import * as yup from "yup";

export const courseRegistrationFormSchema = (t: TFunction) => {
  return yup.object({
    fullName: yup
      .string()
      .trim()
      .required(t('forms.validation.name.required'))
      .min(2, (t('forms.validation.name.min'))),

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
  })
}