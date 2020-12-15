import { Coordinates } from "../../resources/types/common";
import { Happening, HappeningMarker, RequiredTravel } from "../types.state";
import {
  AddHappeningAction,
  InitializeMapAction,
  MapActionTypes,
  MapClickAction,
  SetHappeningAction,
  SetTravelsAction,
  ToggleEngageAction,
  ToggleThemeAction
} from "./map.types";

export const initializeMapAction = (
  mapInstance: google.maps.Map
): InitializeMapAction => ({
  type: MapActionTypes.INITIALIZE_MAP,
  instance: mapInstance
});

export const toggleThemeAction = (): ToggleThemeAction => ({
  type: MapActionTypes.TOGGLE_THEME
});

export const mapClickAction = (latLng: Coordinates): MapClickAction => ({
  type: MapActionTypes.MAP_CLICK,
  latLng
});

export const toggleEngageAction = (): ToggleEngageAction => ({
  type: MapActionTypes.TOGGLE_ENGAGE
});

export const addHappeningAction = (
  happening: Happening
): AddHappeningAction => ({
  type: MapActionTypes.ADD_HAPPENING,
  happening
});

export const setTravelsAction = (
  travels: RequiredTravel[]
): SetTravelsAction => ({
  type: MapActionTypes.SET_TRAVELS,
  travels
});

export const setHappeningAction = (
  happening?: HappeningMarker
): SetHappeningAction => ({
  type: MapActionTypes.SET_HAPPENING,
  happening
});
