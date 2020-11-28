import Axios from "axios";
import { TravelFormValues } from "../components/views/CreateTravel/CreateTravel.view";
import { EditProfileFormValues } from "../components/views/Profile/outlets/EditProfile.outlet";
import { HappeningRequestData, Travel } from "../store/types.state";
import { LocalCredentials, ProfileResponseData } from "./api.types";

class APIClient {
  #client = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
  });

  async fetchUserProfile(userId?: string): Promise<ProfileResponseData> {
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
  ): Promise<ProfileResponseData> {
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

  async createTravel(travel: TravelFormValues): Promise<Required<Travel>> {
    const { data } = await this.#client.post("/travel", travel);
    return data;
  }

  async updateTravel(travel: Required<Travel>) {
    const { data } = await this.#client.put(`/travel/${travel.id}`, travel);
    return data;
  }

  async createHappening(happening: HappeningRequestData) {
    const formData = new FormData();

    Object.entries(happening).forEach(([key, value]) => {
      if (key === "images" && happening[key].length) {
        happening[key].forEach((image) => formData.append(key, image));
      } else if (value) {
        formData.append(key, value);
      }
    });

    const { data } = await this.#client.post(
      `/travel/${happening.travelId}`,
      formData
    );

    return data;
  }
}

const API = new APIClient();

export default API;
