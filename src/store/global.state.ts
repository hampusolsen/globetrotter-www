import { atom } from "jotai";
import { GlobalState } from "./types.state";

export const globalState: GlobalState = {
  displayName: "",
  profilePic: "",
  description: "",
  followers: [],
  following: [],
  travels: []
};

export const globalAtom = atom(globalState);

export const travelAtom = atom((get) => get(globalAtom).travels);

export const subscribersAtom = atom((get) => ({
  followers: get(globalAtom).followers,
  following: get(globalAtom).following
}));

export const profileStatsAtom = atom((get) => ({
  followers: get(globalAtom).followers.length,
  following: get(globalAtom).following.length,
  travels: get(globalAtom).travels.length
}));

export const profileAtom = atom((get) => ({
  displayName: get(globalAtom).displayName,
  profilePic: get(globalAtom).profilePic,
  description: get(globalAtom).description,
  stats: get(profileStatsAtom)
}));
