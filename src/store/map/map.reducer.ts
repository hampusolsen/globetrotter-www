import { DARK, LIGHT } from "../../config/constants.config";
import { MapAction, MapActionTypes, MapState } from "./map.types";

export const mapReducer = (state: MapState, action: MapAction): MapState => {
  const updatedState = { ...state };

  switch (action.type) {
    case MapActionTypes.INITIALIZE_MAP:
      updatedState.instance = action.instance;
      break;

    case MapActionTypes.TOGGLE_THEME:
      updatedState.theme = state.theme === LIGHT ? DARK : LIGHT;
      break;

    case MapActionTypes.MAP_CLICK:
      if (state.activeHappening) updatedState.activeHappening = undefined;
      break;

    case MapActionTypes.TOGGLE_ENGAGE:
      updatedState.engageMode = "edit";
      break;

    case MapActionTypes.ADD_HAPPENING:
      updatedState.happenings.push(action.happening);
      break;

    case MapActionTypes.SET_TRAVELS:
      updatedState.travels = action.travels;
      break;

    case MapActionTypes.SET_HAPPENING:
      updatedState.activeHappening = action.happening;
      break;

    default:
      return state;
  }

  return updatedState;
};
