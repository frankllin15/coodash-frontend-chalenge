import { formatUserResponse } from "./../../utils/format";
import axios from "axios";

const api = axios.create({
  baseURL: "https://randomuser.me/api",
});

export interface IGetUsersParams {
  gender?: string;
  page?: string;
  results?: string;
  nat?: string;
  seed?: string;
  inc?: string;
}

const defaultParams: IGetUsersParams = {
  page: "1",
  results: "20",
  nat: "br",
  seed: "48028b6c60e8af7e",
  inc: "id,name,email,dob,location,phone,picture,nat,gender",
};

export const getUsers = (params: IGetUsersParams) => {
  const uralParams = new URLSearchParams({
    ...defaultParams,
    ...params,
  });
  return api.get(`?${uralParams}`).then((response) => {
    console.log("data", response);
    return {
      results: formatUserResponse(response),
    };
  });
};
