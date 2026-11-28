export type UserRole = 'admin' | 'user'

export interface AuthUser {
  uid: string;
  email: string | null;
  role: UserRole;
}