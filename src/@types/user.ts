export interface IUser {
  auth: boolean;
  token: string;
  user: {
    userId: string;
    name: string;
    email: string;
    phone: string;
    image: string;
    role: string;
  };
}

export interface User{
  image: string;
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  createdAt: string;
}
