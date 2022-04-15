export interface IUser {
  fullName: string;
  email: string;
  birthDate: string;
  gender: string;
  picture: {
    large: string;
    medium: string;
  };
  nat: string;
}
