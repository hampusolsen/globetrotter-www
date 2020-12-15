import Axios from "axios";
import { TravelFormValues } from "../components/views/CreateTravel/CreateTravel.view";
import { EditProfileFormValues } from "../components/views/Profile/outlets/EditProfile.outlet";
import { HappeningFieldValues } from "../store/happeningForm/happeningForm.types";
import { Happening, RequiredTravel, Travel } from "../store/types.state";
import {
  HappeningResponseData,
  LocalCredentials,
  ProfileResponseData,
  TravelResponseData
} from "./api.types";
import { toFormatHappening, toFormatTravel } from "./api.utils";

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

    const { data } = await this.#client.get("/user/profile");
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

  async fetchTravels(): Promise<RequiredTravel[]> {
    const { data } = await this.#client.get<TravelResponseData[]>("/travel");
    return data.map(toFormatTravel);
  }

  async updateTravel(travel: Required<Travel>) {
    const { data } = await this.#client.put(`/travel/${travel.id}`, travel);
    return data;
  }

  async createHappening(
    happening: HappeningFieldValues
  ): Promise<Required<Happening>> {
    const formData = new FormData();

    Object.entries(happening).forEach(([key, value]) => {
      if (key === "images" && happening[key].length) {
        happening[key].forEach((image) => formData.append(key, image));
      } else if (key === "latLng") {
        formData.append(
          "geoJSON",
          JSON.stringify([happening.latLng.lng, happening.latLng.lat])
        );
      } else if (value) {
        formData.append(key, value);
      }
    });

    const { data } = await this.#client.post<HappeningResponseData>(
      `/travel/${happening.travelId}`,
      formData
    );

    return toFormatHappening(data);
  }
}

const API = new APIClient();

export default API;
