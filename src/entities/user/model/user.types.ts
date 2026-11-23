export type UserRole = 'admin'

export interface User {
  uid: string;
  email: string;
  role: UserRole;
}