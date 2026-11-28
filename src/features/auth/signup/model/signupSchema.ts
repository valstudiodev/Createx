import * as yup from 'yup';
import type { TFunction } from 'i18next';

export const signupSchema = (t: TFunction) => {
  return yup.object({
    email: yup
      .string()
      .trim()
      .email(t('Enter a valid email'))
      .required(t('Email is required')),

    password: yup
      .string()
      .min(8, t('Password must contain at least 8 characters'))
      .required(t('Password is required')),

    confirmPassword: yup
      .string()
      .required(t('Please confirm your password'))
      .oneOf(
        [yup.ref('password')],
        t('Passwords must match'),
      ),
  });
};

export type SignupFormValues = yup.InferType<
  ReturnType<typeof signupSchema>
>;