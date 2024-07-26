export interface User {
  [x: string]: string;
  id?: string | number;
  email: string;
  password: string;
  confirmPass: string;
}
