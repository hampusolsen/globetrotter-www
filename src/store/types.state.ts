export interface Image {
  thumbnailUrl: string;
  url: string;
  alt: string;
}

export interface Happening {
  title: string;
  images: Image[];
}

export interface Travel {
  title: string;
  happenings: Happening[];
}

export interface MinifiedProfile {
  displayName: string;
  pictureUrl?: string;
  id: string;
}

export interface ProfileState {
  displayName: string;
  pictureUrl?: string;
  followers: MinifiedProfile[];
  following: MinifiedProfile[];
  travels: Travel[];
}
