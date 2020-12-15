import { Form, Formik, FormikHelpers } from "formik";
import { useAtom } from "jotai";
import React from "react";
import styled, { keyframes } from "styled-components";
import API from "../../../../../../../api/api.client";
import {
  formSubmittedAction,
  submitStepAction,
  toggleFormAction
} from "../../../../../../../store/happeningForm/happeningForm.actions";
import { happeningFormReducerAtom } from "../../../../../../../store/happeningForm/happeningForm.state";
import { HappeningFieldValues } from "../../../../../../../store/happeningForm/happeningForm.types";
import {
  addHappeningAction,
  toggleEngageAction
} from "../../../../../../../store/map/map.actions";
import { mapReducerAtom } from "../../../../../../../store/map/map.state";
import Button from "../../../../../../common/ia/Button/Button.ia";
import Modal from "../../../../../../common/wrappers/Modal";
import {
  happeningFormStepValidations,
  renderStep
} from "./CreateHappening.form";

const animateIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translate(-50%, -45%);
  } to {
    opacity: 1;
    transform: scale(1) translate(-50%, -60%);
  }
`;

const Wrapper = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 60%;
  min-width: 240px;
  transform: scale(0.95) translate(-50%, -60%);
  opacity: 0;
  max-width: 420px;
  padding: 42px 24px;
  background-color: white;
  border-radius: 18px;
  box-shadow: 0 0 10px #00000050;
  animation: ${animateIn} 0.2s 0.15s forwards;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000025;
`;

const StyledForm = styled(Form)`
  height: 100%;
  display: flex;
  flex-direction: column;

  > button {
    margin-top: auto;
  }
`;

const HappeningForm: React.FC = () => {
  const [state, formDispatch] = useAtom(happeningFormReducerAtom);
  const [, mapDispatch] = useAtom(mapReducerAtom);

  async function handleSubmit(
    values: HappeningFieldValues,
    _actions: FormikHelpers<HappeningFieldValues>
  ) {
    if (state.currentStep === 1) {
      mapDispatch(toggleEngageAction());
    }
    if (state.currentStep < 3) {
      formDispatch(submitStepAction(values));
    } else {
      const data = await API.createHappening(values);
      mapDispatch(addHappeningAction(data));
      formDispatch(formSubmittedAction());
    }
  }

  return (
    <Modal>
      <Background onClick={() => formDispatch(toggleFormAction())}>
        <Wrapper onClick={(e: React.MouseEvent) => e.stopPropagation()}>
          <Formik
            initialValues={state.fieldValues}
            onSubmit={handleSubmit}
            validationSchema={happeningFormStepValidations[state.currentStep]}
          >
            {() => (
              <StyledForm>
                {renderStep(state.currentStep)}
                <Button filled type="submit">
                  {state.currentStep < 3 ? "NEXT" : "SUBMIT"}
                </Button>
              </StyledForm>
            )}
          </Formik>
        </Wrapper>
      </Background>
    </Modal>
  );
};

export default HappeningForm;
