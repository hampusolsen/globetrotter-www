import { atom } from "jotai";
import { ProfileState } from "./types.state";

const initialProfileState = {
  displayName: "",
  pictureUrl: "",
  followers: [],
  following: [],
  travels: []
};

const profileState = atom<ProfileState>(initialProfileState);

export const travelState = atom((get) => get(profileState).travels);

export default profileState;
