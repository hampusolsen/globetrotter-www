import { AxiosError, AxiosResponse } from "axios";

export interface IErrorResponseData {
  status: string;
  message: string;
  code: string;
  name: string;
}

export type ErrorResponse = AxiosError<IErrorResponseData>;

export type UserData = {
  displayName: string;
  pictureUrl?: string;
  followers: [];
  following: [];
  travels: [];
};

export type UseProfileResponse = AxiosResponse<UserData>;

export type LocalCredentials = {
  email: string;
  password: string;
};

export interface IAPIClient {
  fetchUserProfile: (id?: string) => Promise<UserData>;

  authenticateLocally: (
    credentials: LocalCredentials
  ) => Promise<AxiosResponse | ErrorResponse>;

  registerLocally: (
    credentials: LocalCredentials
  ) => Promise<AxiosResponse | ErrorResponse>;

  authenticateWithGoogle: () => Promise<AxiosResponse | ErrorResponse>;
  authenticateWithFacebook: () => Promise<AxiosResponse | ErrorResponse>;
}
