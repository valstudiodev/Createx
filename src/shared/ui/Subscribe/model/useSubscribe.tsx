import { RequestStatus } from "@/shared/types/types";
import { useEffect, useState } from "react";
import { validateEmail } from "./subscribeValidation";
import { addSubscriber } from "../api/subscribe-firebase";


function useSubscribe() {

  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<RequestStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (newEmail: string): void => {
    setEmail(newEmail)
    setError(null)
    setStatus('idle')
  }

  const handleSubmit = async (): Promise<void> => {
    if (status === 'loading') return

    const normalizedEmail = email.trim()
    const validationError = validateEmail(normalizedEmail)

    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setStatus('loading')
    setError(null)

    try {
      await addSubscriber(normalizedEmail)
      setStatus('success')
    } catch (error: unknown) {
      setStatus('error')

      setError(
        error instanceof Error
          ? error.message
          : 'Failed to create a subscribe.'
      )
    }
  }

  useEffect(() => {
    if (status !== 'success') return

    const timer = setTimeout(() => {
      setEmail('')
      setStatus('idle')
    }, 3000);

    return () => {
      clearTimeout(timer)
    }
  }, [status]);

  return {
    email,
    status,
    error,
    handleEmailChange,
    handleSubmit
  }

}

export default useSubscribe;