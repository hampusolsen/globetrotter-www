import { Coordinates } from "../resources/types/common";

export interface Happening {
  id?: string;
  travelId: string;
  title: string;
  description: string;
  images: string[];
  latLng: Coordinates;
  date: Date;
}

export interface Travel {
  title: string;
  description: string;
  happenings: Happening[];
  fromDate: Date;
  toDate: Date;
  id?: string;
  travelers?: MinifiedProfile[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface MinifiedProfile {
  displayName: string;
  profilePic?: string;
  id: string;
}

export interface Profile {
  displayName: string;
  description?: string;
  profilePic?: string;
}

export interface GlobalState {
  id?: string;
  displayName: string;
  description?: string;
  profilePic?: string;
  followers: MinifiedProfile[];
  following: MinifiedProfile[];
  travels: Travel[];
}

export interface FeedState {
  mode: "light" | "dark";
  menuOpen: boolean;
}

export interface HappeningMarker extends Required<Happening> {
  authorPic: string;
  authorName: string;
}

export interface RequiredTravel extends Required<Travel> {
  happenings: Required<Happening>[];
}
