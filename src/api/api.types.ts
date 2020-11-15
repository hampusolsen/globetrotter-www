import { AxiosError, AxiosResponse } from "axios";

export interface IErrorResponseData {
  status: string;
  message: string;
  code: string;
  name: string;
}

export type ErrorResponse = AxiosError<IErrorResponseData>;

export type UserData = {
  display_name: string;
  profile_pic?: string;
  description?: string;
  followers: [];
  following: [];
  travels: [];
};

export type UserDetailsData = Required<
  Pick<UserData, "display_name" | "profile_pic" | "description">
>;

export type UseProfileResponse = AxiosResponse<UserData>;

export type LocalCredentials = {
  email: string;
  password: string;
};
