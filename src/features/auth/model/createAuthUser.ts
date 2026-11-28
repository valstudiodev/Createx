import { UserRole } from "@/entities/user/model/user.types"
import { AuthUser } from "@/shared/types/role"
import { User } from "firebase/auth"

export async function createAuthUser(firebaseUser: User): Promise<AuthUser> {
  const uid = firebaseUser.uid

  const email = firebaseUser.email ?? ''

  const tokenResult = await firebaseUser.getIdTokenResult(true)

  const role: UserRole = tokenResult.claims.role === 'admin' ? 'admin' : 'user'

  return {
    uid,
    email,
    role
  }
}