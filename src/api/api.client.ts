import Axios from "axios";
import { ErrorResponse, IAPIClient, TestResponse } from "./api.types";

class APIClient implements IAPIClient {
  #client = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
  });

  test(): Promise<TestResponse> {
    return this.#client.get("/test");
  }

  error(): Promise<ErrorResponse> {
    return this.#client.get("/error");
  }
}

const API = new APIClient();

export default API;
