import { RequestStatus } from "../../api/api.types";

export interface IUserData {
  username: string;
  followers: number;
  following: number;
  profile_pic: string | null;
  travels: string[];
  description: string | null;
  created_at: string;
}

export interface IUserState {
  data: IUserData | undefined;
  status: RequestStatus;
  isAuthenticated: boolean;
}
