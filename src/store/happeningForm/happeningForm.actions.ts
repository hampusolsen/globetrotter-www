import {
  FormSubmittedAction,
  HappeningFieldValues,
  HappeningFormActionTypes,
  StepPayload,
  SubmitStepAction,
  ToggleFormAction
} from "./happeningForm.types";

export const formSubmittedAction = (): FormSubmittedAction => ({
  type: HappeningFormActionTypes.FORM_SUBMITTED
});

export const submitStepAction = (payload: StepPayload): SubmitStepAction => ({
  type: HappeningFormActionTypes.SUBMIT_STEP,
  payload
});

export const toggleFormAction = (
  open?: boolean,
  fieldValues?: Partial<HappeningFieldValues>,
  step?: number
): ToggleFormAction => ({
  type: HappeningFormActionTypes.TOGGLE_FORM,
  open,
  fieldValues,
  step
});
