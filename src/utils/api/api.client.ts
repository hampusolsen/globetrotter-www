import Axios from "axios";
import { IAPIClient } from "./api.types";

export const PENDING = "PENDING";
export const REJECTED = "REJECTED";
export const FULFILLED = "FULFILLED";
export const IDLE = "IDLE";

class API implements IAPIClient {
    #client = Axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        withCredentials: true,
    });

    test() {
        return this.#client.get("/test");
    }
}

export default new API();
