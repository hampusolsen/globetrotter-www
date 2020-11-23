export interface Image {
  src: string;
}

export type Coordinate = number;

export type Position = [Coordinate, Coordinate];

export interface HappeningResponseData {
  id: string;
  travelId: string;
  title: string;
  description: string;
  images: Image[];
  position: Position;
  date: Date;
  toDate?: Date;
}

export interface HappeningRequestData
  extends Omit<HappeningResponseData, "images"> {
  images: File[];
}

export interface Travel {
  title: string;
  description: string;
  happenings: HappeningResponseData[];
  fromDate: Date;
  toDate: Date;
  id?: string;
  travelers?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface MinifiedProfile {
  displayName: string;
  profileNic?: string;
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
