import { atom } from "jotai";

interface ProfileState {
  displayName: string;
}

const initialProfileState = {
  displayName: ""
};

const profileState = atom<ProfileState>(initialProfileState);

export default profileState;
