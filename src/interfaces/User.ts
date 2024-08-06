export interface User {
  _id?: string;
  email: string;
  password: string;
  confirmPass: string;
  role?: "admin" | "member";
  secretCode?: string;
  isActive: boolean;
}
