import Axios, { AxiosResponse } from "axios";
import { IAPIClient, LocalCredentials, UserData } from "./api.types";

class APIClient implements IAPIClient {
  #client = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
  });

  async fetchUserProfile(userId: string | undefined): Promise<UserData> {
    if (userId) {
      const { data } = await this.#client.get(`/user/profile/${userId}`);
      return data;
    }

    const { data } = await this.#client.get("/user/profile/");
    return data;
  }

  authenticateLocally(credentials: LocalCredentials): Promise<AxiosResponse> {
    return this.#client.post("/security/local/authenticate", credentials);
  }

  registerLocally(credentials: LocalCredentials): Promise<AxiosResponse> {
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
