export interface IUser {
  auth: boolean;
  token: string;
  user: {
    userId: string;
    name: string;
    email: string;
    image: string;
    phone: string;
    role: string;
  };
}
