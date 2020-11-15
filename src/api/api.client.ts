import Axios from "axios";
import { EditProfileFormValues } from "../components/views/Profile/outlets/EditProfile.outlet";
import { LocalCredentials, UserData, UserDetailsData } from "./api.types";

class APIClient {
  #client = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
  });

  async fetchUserProfile(userId?: string): Promise<UserData> {
    if (userId) {
      const { data } = await this.#client.get(`/user/profile/${userId}`);
      return data;
    }

    const { data } = await this.#client.get("/user/profile/");
    return data;
  }

  async logoutUser(): Promise<boolean> {
    try {
      await this.#client.delete("/security/logout");
    } catch {
      return false;
    }

    return true;
  }

  authenticateLocally(credentials: LocalCredentials) {
    return this.#client.post("/security/local/authenticate", credentials);
  }

  registerLocally(credentials: LocalCredentials) {
    return this.#client.post("/security/local/register", credentials);
  }

  authenticateWithGoogle() {
    return this.#client.get("/security/google");
  }

  authenticateWithFacebook() {
    return this.#client.get("/security/facebook");
  }

  async updateUserProfile(
    profile: EditProfileFormValues
  ): Promise<UserDetailsData> {
    const formData = new FormData();

    Object.entries(profile).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    const { data } = await this.#client.put("/user/profile/", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    return data;
  }
}

const API = new APIClient();

export default API;
