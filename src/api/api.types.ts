import { AxiosError } from "axios";
import { GlobalState, MinifiedProfile } from "../store/types.state";

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

/** coordinates is a tuple of [longitude, latitude] */
export type GeoJSON = {
  type: "Point";
  coordinates: number[];
};

interface BaseResponseData {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface HappeningResponseData extends BaseResponseData {
  date: string;
  images: string[];
  description: string;
  position: GeoJSON;
  title: string;
  travelId: string;
}

export interface TravelResponseData extends BaseResponseData {
  title: string;
  happenings: HappeningResponseData[];
  description: string;
  travelers: { details: MinifiedProfile }[];
  fromDate: string;
  toDate: string;
}
