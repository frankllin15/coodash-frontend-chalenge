import moment from "moment";
import { IUserDataResponse } from "../actions/query/types";
import { IUser } from "../types";

export const formatUserResponse = (response: IUserDataResponse): IUser[] => {
  return response.data.results.map((user) => {
    return {
      fullName: `${user.name.first} ${user.name.last}`,
      email: user.email,
      birthDate: moment(user.dob.date).format("DD/MM/YYYY"),
      gender: user.gender == "female" ? "Feminino" : "Masculo",
      picture: user.picture,
      nat: user.nat,
    };
  });
};
