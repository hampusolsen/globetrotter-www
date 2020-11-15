import { atom } from "jotai";
import { ProfileState } from "./types.state";

export const initialProfileState = {
  display_name: "",
  profile_pic: "",
  description: "",
  followers: [],
  following: [],
  travels: []
};

const profileState = atom<ProfileState>(initialProfileState);

export const travelState = atom((get) => get(profileState).travels);

export default profileState;
