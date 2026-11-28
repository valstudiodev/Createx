import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { signupSchema } from "../../model/signupSchema";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectAuthError } from "@/features/auth/model/authSelector";
import { useForm } from "react-hook-form";
import { SignUpFormValues } from "@/features/auth/model/auth.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupThunk } from "../../model/signupThunk";
import './signupForm.scss';

interface SignupFormProps {
  className?: string;
  onSuccess: () => void;
}

function SignupForm({
  className = '',
  onSuccess
}: SignupFormProps): React.JSX.Element {
  const signupForm = 'signup-form'

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const authError = useAppSelector(selectAuthError)

  const schema = useMemo(
    () => signupSchema(t),
    [t]
  )

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = async (values: SignUpFormValues): Promise<void> => {
    try {
      await dispatch(signupThunk(values)).unwrap()
      reset()
      onSuccess?.()
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  return (
    <form
      className={`${signupForm} ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`${signupForm}__field`}>
        <label
          className={`${signupForm}__label`}
          htmlFor="email">Email</label>
        <input
          id="email"
          className={`${signupForm}__input`}
          type="email"
          placeholder="Your working email"
          {...register('email')}
          aria-invalid={Boolean(errors.email)}
        />

        {errors.email && (
          <p className={`${signupForm}__error`}>{errors.email?.message}</p>
        )}
      </div>

      <div className={`${signupForm}__field`}>
        <label
          className={`${signupForm}__label`}
          htmlFor="password">Password</label>
        <input
          id="password"
          className={`${signupForm}__input`}
          type="password"
          {...register('password')}
          aria-invalid={Boolean(errors.password)}
        />

        {errors.password && (
          <p className={`${signupForm}__error`}>{errors.password?.message}</p>
        )}
      </div>

      <div className={`${signupForm}__field`}>
        <label
          className={`${signupForm}__label`}
          htmlFor="confirm-password">Confirm Password</label>
        <input
          id="confirm-password"
          className={`${signupForm}__input`}
          type="password"
          {...register('confirmPassword')}
          aria-invalid={Boolean(errors.confirmPassword)}
        />

        {errors.confirmPassword && (
          <p className={`${signupForm}__error`}>{errors.confirmPassword?.message}</p>
        )}
      </div>

      {/* <div className={`${signupForm}__field`}>
        <input
          className={`${signupForm}__checkbox`}
          type="checkbox"
        />
        <label
          className={`${signupForm}__label`}
          htmlFor="">Remember me</label>

        {authError && (
          <p className={`${signupForm}__error`}></p>
        )}
      </div> */}

      {/* <div className={`${signupForm}__field`}>
        <label
          className={`${signupForm}__label`}
          htmlFor="">Full name</label>
        <input
          className={`${signupForm}__input`}
          type="text" />
      </div> */}

      {authError && (
        <p
          className={`${signupForm}__error`}
          role="alert"
        >
          {authError}
        </p>
      )}

      <button
        type="submit"
        className={`${signupForm}__btn`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Signing up...' : 'Sign up'}
      </button>
    </form>
  );
}

export default SignupForm;
