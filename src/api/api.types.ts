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

export type TestResponse = AxiosResponse<{ hello: string }>;

export interface IAPIClient {
  getUser: (url: string) => Promise<AxiosResponse | ErrorResponse>;
}
