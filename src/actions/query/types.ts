interface IUserResponse {
  name: {
    first: string;
    last: string;
  };
  email: string;
  gender: string;
  dob: {
    age: number;
    date: string;
  };
  picture: {
    large: string;
    medium: string;
  };
  location: {
    street: string;
    city: string;
    state: string;
  };
  nat: string;
}

export interface IUserDataResponse {
  data: {
    results: IUserResponse[];
  };
}
