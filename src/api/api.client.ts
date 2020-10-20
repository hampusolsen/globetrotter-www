import Axios, { AxiosResponse } from "axios";
import { IAPIClient } from "./api.types";

class APIClient implements IAPIClient {
  #client = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
  });

  getUser(url: string): Promise<AxiosResponse> {
    return this.#client.get(url);
  }
}

const API = new APIClient();

export default API;
