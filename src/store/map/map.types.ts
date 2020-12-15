import { Coordinates } from "../../resources/types/common";
import { Happening, HappeningMarker, RequiredTravel } from "../types.state";

export enum MapActionTypes {
  INITIALIZE_MAP = "INITIALIZE_MAP",
  TOGGLE_THEME = "TOGGLE_THEME",
  MAP_CLICK = "MAP_CLICK",
  TOGGLE_ENGAGE = "TOGGLE_ENGAGE",
  ADD_HAPPENING = "ADD_HAPPENING",
  SET_TRAVELS = "SET_TRAVELS",
  SET_HAPPENING = "SET_HAPPENING"
}

export interface InitializeMapAction {
  type: MapActionTypes.INITIALIZE_MAP;
  instance: google.maps.Map;
}

export interface ToggleThemeAction {
  type: MapActionTypes.TOGGLE_THEME;
}

export interface MapClickAction {
  type: MapActionTypes.MAP_CLICK;
  latLng: Coordinates;
}

export interface ToggleEngageAction {
  type: MapActionTypes.TOGGLE_ENGAGE;
}

export interface AddHappeningAction {
  type: MapActionTypes.ADD_HAPPENING;
  happening: Happening;
}

export interface SetTravelsAction {
  type: MapActionTypes.SET_TRAVELS;
  travels: RequiredTravel[];
}

export interface SetHappeningAction {
  type: MapActionTypes.SET_HAPPENING;
  happening?: HappeningMarker;
}

export type MapAction =
  | InitializeMapAction
  | ToggleThemeAction
  | ToggleEngageAction
  | AddHappeningAction
  | SetTravelsAction
  | SetHappeningAction
  | MapClickAction;

export type MapEngageMode = "view" | "edit";
export type MapThemeMode = "light" | "dark";

export interface MapState {
  instance: google.maps.Map | null;
  engageMode: MapEngageMode;
  theme: MapThemeMode;
  activeHappening?: HappeningMarker;
  happenings: Happening[];
  travels: RequiredTravel[];
}
