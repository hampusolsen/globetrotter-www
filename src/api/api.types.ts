import { AxiosResponse } from "axios";
import { FULFILLED, IDLE, PENDING, REJECTED } from "../config/constants.config";

export type RequestStatus =
  | typeof IDLE
  | typeof PENDING
  | typeof FULFILLED
  | typeof REJECTED;

export interface IErrorResponseData {
  status: string;
  message: string;
  code: string;
  name: string;
}

export type ErrorResponse = AxiosResponse<IErrorResponseData>;

export type LocalCredentials = {
  email: string;
  password: string;
};

export interface IAPIClient {
  getCurrentUser: () => Promise<AxiosResponse | ErrorResponse>;

  authenticateLocally: (
    credentials: LocalCredentials
  ) => Promise<AxiosResponse | ErrorResponse>;

  registerNewUserLocally: (
    credentials: LocalCredentials
  ) => Promise<AxiosResponse | ErrorResponse>;

  authenticateWithGoogle: () => Promise<AxiosResponse | ErrorResponse>;
  authenticateWithFacebook: () => Promise<AxiosResponse | ErrorResponse>;
}
