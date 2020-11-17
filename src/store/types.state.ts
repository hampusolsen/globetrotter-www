export interface Image {
  src: string;
}

export interface Happening {
  title: string;
  description: string;
  images: Image[];
}

export interface Travel {
  title: string;
  description: string;
  happenings: Happening[];
  from_date: Date;
  to_date: Date;
}

export interface MinifiedProfile {
  display_name: string;
  profile_pic?: string;
  id: string;
}

export interface ProfileState {
  display_name: string;
  description?: string;
  profile_pic?: string;
  followers: MinifiedProfile[];
  following: MinifiedProfile[];
  travels: Travel[];
}
