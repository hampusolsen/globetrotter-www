import { Happening, RequiredTravel } from "../store/types.state";
import { HappeningResponseData, TravelResponseData } from "./api.types";

export function toFormatHappening(
  happening: HappeningResponseData
): Required<Happening> {
  return {
    id: happening.id,
    date: new Date(happening.date),
    travelId: happening.travelId,
    images: happening.images,
    title: happening.title,
    description: happening.description,
    latLng: {
      lat: happening.position.coordinates[1],
      lng: happening.position.coordinates[0]
    }
  };
}

export function toFormatTravel(travel: TravelResponseData): RequiredTravel {
  return {
    title: travel.title,
    description: travel.description,
    fromDate: new Date(travel.fromDate),
    toDate: new Date(travel.toDate),
    id: travel.id,
    createdAt: new Date(travel.createdAt),
    updatedAt: new Date(travel.createdAt),
    travelers: travel.travelers.map((traveler) => traveler.details),
    happenings: travel.happenings.map(toFormatHappening)
  };
}
