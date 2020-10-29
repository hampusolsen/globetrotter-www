import Axios, { AxiosResponse } from "axios";
import { IAPIClient, LocalCredentials } from "./api.types";

class APIClient implements IAPIClient {
  #client = Axios.create({
    baseURL: process.env.REACT_APP_API_URL
    // withCredentials: true
  });

  getCurrentUser(): Promise<AxiosResponse> {
    return this.#client.get("/user/current");
  }

  authenticateLocally(credentials: LocalCredentials): Promise<AxiosResponse> {
    return this.#client.post("/security/local/authenticate", credentials);
  }

  registerNewUserLocally(
    credentials: LocalCredentials
  ): Promise<AxiosResponse> {
    return this.#client.post("/security/local/register", credentials);
  }

  authenticateWithGoogle() {
    return this.#client.get("/security/google");
  }

  authenticateWithFacebook() {
    return this.#client.get("/security/facebook");
  }
}

const API = new APIClient();

export default API;
