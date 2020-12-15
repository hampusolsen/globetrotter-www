import { initialHappeningFormState } from "./happeningForm.state";
import {
  HappeningFormAction,
  HappeningFormActionTypes,
  HappeningFormState
} from "./happeningForm.types";

export const happeningFormReducer = (
  state: HappeningFormState,
  action: HappeningFormAction
): HappeningFormState => {
  const updatedState = { ...state };

  switch (action.type) {
    case HappeningFormActionTypes.TOGGLE_FORM:
      if (action.open === undefined) updatedState.isOpen = !state.isOpen;
      if (action.open === true) updatedState.isOpen = true;
      if (action.open === false) updatedState.isOpen = false;

      if (action.fieldValues) {
        updatedState.fieldValues = {
          ...updatedState.fieldValues,
          ...action.fieldValues
        };
      }

      if (action.step) updatedState.currentStep = action.step;

      return updatedState;

    case HappeningFormActionTypes.SUBMIT_STEP:
      updatedState.currentStep += 1;

      if (!updatedState.isOpen) {
        updatedState.isOpen = true;
      }

      if (updatedState.currentStep === 2) {
        updatedState.isOpen = false;
      }

      updatedState.fieldValues = {
        ...updatedState.fieldValues,
        ...action.payload
      };

      return updatedState;

    case HappeningFormActionTypes.FORM_SUBMITTED:
      return initialHappeningFormState;

    default:
      return state;
  }
};
