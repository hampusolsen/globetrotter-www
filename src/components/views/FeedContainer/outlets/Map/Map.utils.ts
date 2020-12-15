import {
  HappeningMarker,
  RequiredTravel
} from "../../../../../store/types.state";

export function toHappeningMarker(travel: RequiredTravel): HappeningMarker[] {
  return travel.happenings.map((happening) => ({
    ...happening,
    authorPic: travel.travelers[0].profilePic || "",
    authorName: travel.travelers[0].displayName
  }));
}
