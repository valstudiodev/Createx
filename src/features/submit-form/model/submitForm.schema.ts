import { contactFormSchema } from "@/features/contact/model/contact.schema";
import { TFunction } from "i18next";
import * as yup from "yup";

export const submitFormSchema = (t: TFunction) => {
  return yup.object({
    name: yup
      .string()
      .trim()
      .required(t('forms.validation.name.required'))
      .min(2, t('forms.validation.name.min')),

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
      )
  })
}

export type ContactFormSchema = yup.InferType<
  ReturnType<typeof contactFormSchema>
>;