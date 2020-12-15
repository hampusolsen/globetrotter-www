import { atom } from "jotai";
import { Coordinates } from "../../resources/types/common";
import { happeningFormReducer } from "./happeningForm.reducer";
import { HappeningFormAction, HappeningFormState } from "./happeningForm.types";

export const initialHappeningFormState: HappeningFormState = {
  fieldValues: {
    title: "",
    description: "",
    images: [],
    travelId: "",
    latLng: {} as Coordinates
  },
  currentStep: 0,
  isOpen: false
};

const happeningFormAtom = atom(initialHappeningFormState);

export const happeningFormReducerAtom = atom(
  (get) => get(happeningFormAtom),
  (get, set, action: HappeningFormAction) =>
    set(happeningFormAtom, happeningFormReducer(get(happeningFormAtom), action))
);
