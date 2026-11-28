import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { LoginFormValues, loginSchema } from "../../model/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { loginThunk } from "../../model/loginThunk";
import { selectAuthError } from "@/features/auth/model/authSelector";
import './loginForm.scss';

interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

function LoginForm({
  className = '',
  onSuccess
}: LoginFormProps): React.JSX.Element {
  const loginForm = 'login-form'
  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const authError = useAppSelector(selectAuthError)

  const schema = useMemo(
    () => loginSchema(t),
    [t]
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    }
  })

  const onSubmit = async (values: LoginFormValues): Promise<void> => {

    try {
      await dispatch(loginThunk(values)).unwrap()
      reset()
      onSuccess?.()
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  return (
    <form
      className={`${loginForm} ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`${loginForm}__field`}>
        <label
          className={`${loginForm}__label`}
          htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          aria-invalid={Boolean(errors.email)}
          className={`${loginForm}__input`}
          placeholder="Your working email"
        />
        {errors.email && (
          <p className={`${loginForm}__error`}>
            {errors.email?.message}
          </p>
        )}
      </div>

      <div className={`${loginForm}__field`}>
        <label
          className={`${loginForm}__label`}
          htmlFor="password">Passsword</label>
        <input
          className={`${loginForm}__input`}
          type="password"
          {...register('password')}
          aria-invalid={Boolean(errors.password)}
        />
        {errors.password && (
          <p className={`${loginForm}__error`}>
            {errors.password?.message}
          </p>
        )}
      </div>

      <div className={`${loginForm}__wrap`}>
        <input
          id="remember"
          type="checkbox"
          className={`${loginForm}__checkbox`}
          aria-invalid={Boolean(errors.rememberMe)}
          {...register('rememberMe')}
        />
        <label htmlFor="remember">Keep me signed in</label>
        {errors.rememberMe && (
          <p className={`${loginForm}__error`}>
            {errors.rememberMe?.message}
          </p>
        )}
      </div>

      {authError && (
        <p
          className={`${loginForm}__error`}
          role="alert"
        >
          {authError}
        </p>
      )}

      <button
        type="submit"
        className={`${loginForm}__btn`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  );
}

export default LoginForm;