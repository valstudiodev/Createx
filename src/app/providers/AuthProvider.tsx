import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { getIdTokenResult, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/shared/config/firebase/firebase-config";
import { setInitialized, setUser } from "@/features/auth/model/authSlice";
import { AuthUser } from "@/entities/user/model/user.types";


interface AuthProviderProps {
  children: React.ReactNode
}

function AuthProvider({
  children
}: AuthProviderProps) {

  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async firebaseUser => {
      try {
        if (!firebaseUser) {
          dispatch(setUser(null))
          return
        }

        const tokenResult = await getIdTokenResult(firebaseUser)

        const authUser: AuthUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          role: tokenResult.claims.admin === true ? 'admin' : 'user'
        }

        dispatch(setUser(authUser))

      } catch (error) {
        console.error('Failed to initialize authentication:', error)
        dispatch(setUser(null))
      } finally {
        dispatch(setInitialized(true))
      }
    })

    return unsubscribe
  }, [dispatch])

  return (
    <>{children}</>
  )

}

export default AuthProvider;