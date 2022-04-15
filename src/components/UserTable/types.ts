import { IUser } from "../../types";

export interface ITableHeaders {
  name: string;
  value: keyof IUser | "actions";
}
