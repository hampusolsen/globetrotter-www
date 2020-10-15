import { AxiosResponse } from "axios";
import { FULFILLED, IDLE, PENDING, REJECTED } from "./api.client";

export type RequestStatus =
    | typeof IDLE
    | typeof PENDING
    | typeof FULFILLED
    | typeof REJECTED;

export interface IErrorResponse {
    status: string;
    message: string;
    code: number;
    name: string;
}

export interface IAPIClient {
    test: () => Promise<AxiosResponse>;
}
