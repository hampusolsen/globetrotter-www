import {
  IErrorResponseData,
  ITestResponseData,
  RequestStatus
} from "../../api/api.types";

export interface ITestState {
  status: RequestStatus;
  data: ITestResponseData;
  errors: IErrorResponseData[];
}
