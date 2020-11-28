import { AxiosError } from "axios";
import { GlobalState } from "../store/types.state";

export interface IErrorResponseData {
  status: string;
  message: string;
  code: string;
  name: string;
}

export type ErrorResponse = AxiosError<IErrorResponseData>;

export type ProfileResponseData = Pick<
  GlobalState,
  "displayName" | "followers" | "following" | "travels"
>;

export type LocalCredentials = {
  email: string;
  password: string;
};
