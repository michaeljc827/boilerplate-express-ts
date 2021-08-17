export interface User {
  id: number;
  username: string;
  password?: string;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  role_id?: number;
  privilege_id?: number;
  profile_url?: string;
}
