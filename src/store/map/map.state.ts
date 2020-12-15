import { atom } from "jotai";
import { LIGHT, VIEW } from "../../config/constants.config";
import { mapReducer } from "./map.reducer";
import { MapAction, MapState } from "./map.types";

export const initialMapState: MapState = {
  instance: null,
  engageMode: VIEW,
  theme: LIGHT,
  activeHappening: undefined,
  happenings: [],
  travels: []
};

const mapAtom = atom(initialMapState);

export const mapReducerAtom = atom(
  (get) => get(mapAtom),
  (get, set, action: MapAction) =>
    set(mapAtom, mapReducer(get(mapAtom), action))
);
