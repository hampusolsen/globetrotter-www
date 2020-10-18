import { AxiosResponse } from "axios";

export const PENDING = "PENDING";
export const REJECTED = "REJECTED";
export const FULFILLED = "FULFILLED";
export const IDLE = "IDLE";

export type RequestStatus =
  | typeof IDLE
  | typeof PENDING
  | typeof FULFILLED
  | typeof REJECTED;

export interface ITestResponseData {
  hello: string;
}

export interface IErrorResponseData {
  status: string;
  message: string;
  code: string;
  name: string;
}

export type ErrorResponse = AxiosResponse<IErrorResponseData>;

export type TestResponse = AxiosResponse<{ hello: string }>;

export interface IAPIClient {
  test: () => Promise<TestResponse>;
  error: () => Promise<ErrorResponse>;
}
