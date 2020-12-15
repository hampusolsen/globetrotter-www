import { Coordinates } from "../../resources/types/common";

export enum HappeningFormActionTypes {
  TOGGLE_FORM = "TOGGLE_FORM",
  FORM_SUBMITTED = "FORM_SUBMITTED",
  SUBMIT_STEP = "SUBMIT_STEP"
}

export interface ToggleFormAction {
  type: HappeningFormActionTypes.TOGGLE_FORM;
  open?: boolean;
  fieldValues?: Partial<HappeningFieldValues>;
  step?: number;
}

export interface FormSubmittedAction {
  type: HappeningFormActionTypes.FORM_SUBMITTED;
}

interface FirstStep {
  travelId: string;
}

interface SecondStep {
  title: string;
  description: string;
}

interface ThirdStep {
  latLng: Coordinates;
}

interface FourthStep {
  images: File[];
}

export type StepPayload = FirstStep | SecondStep | ThirdStep | FourthStep;

export interface SubmitStepAction {
  type: HappeningFormActionTypes.SUBMIT_STEP;
  payload: StepPayload;
}

export type HappeningFormAction =
  | ToggleFormAction
  | FormSubmittedAction
  | SubmitStepAction;

export interface HappeningFieldValues {
  travelId: string;
  title: string;
  description: string;
  latLng: Coordinates;
  images: File[];
}

export interface HappeningFormState {
  fieldValues: HappeningFieldValues;
  currentStep: number;
  isOpen: boolean;
}
