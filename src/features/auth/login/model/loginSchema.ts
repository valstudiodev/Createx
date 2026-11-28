import { TFunction } from "i18next";
import * as yup from "yup";

export const loginSchema = (t: TFunction) => {
  return yup.object({
    email: yup
      .string()
      .trim()
      .email(t('Enter a valid email'))
      .required(t('Email is required')),

    password: yup
      .string()
      .trim()
      .min(8, t('Password must contain at least 8 characters'))
      .required(t('Password is required')),

    rememberMe: yup.boolean().default(false),
  });
};

export type LoginFormValues = yup.InferType<
  ReturnType<typeof loginSchema>
>;