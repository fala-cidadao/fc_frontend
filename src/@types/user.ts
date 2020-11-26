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
