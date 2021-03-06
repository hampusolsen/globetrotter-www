import { Formik, FormikHelpers } from "formik";
import { useAtom } from "jotai";
import React, { useState } from "react";
import API from "../../../api/api.client";
import { TIME } from "../../../config/constants.config";
import LoadingOverlay from "../../../middleware/Loader";
import { globalAtom } from "../../../store/global.state";
import { Travel } from "../../../store/types.state";
import Button from "../../common/ia/Button/Button.ia";
import ArrowIcon from "../../common/icons/Arrow.icon";
import Text from "../../common/Text";
import Fullscreen from "../../common/wrappers/Fullscreen";
import formSteps from "./CreateTravel.form";
import {
  FormWrapper,
  StepButton,
  StepIndicator,
  StepNavigation
} from "./CreateTravel.styled";
import FirstFormStep from "./sub-components/FirstFormStep.sub";
import FormCompleted from "./sub-components/FormCompleted.sub";
import SecondFormStep from "./sub-components/SecondFormStep.sub";

export interface TravelFormValues
  extends Pick<Travel, "title" | "description"> {
  fromDate: undefined | Date;
  toDate: undefined | Date;
}

const initialFormValues: TravelFormValues = {
  title: "",
  description: "",
  fromDate: new Date(),
  toDate: new Date(Date.now() + TIME.ONE_WEEK)
};

const initialFormState = {
  current: 0,
  cleared: 0,
  data: {} as Required<Travel>
};

function renderStep(step: number): React.ReactElement | null {
  switch (step) {
    case 0:
      return <FirstFormStep />;
    case 1:
      return <SecondFormStep />;
    default:
      return null;
  }
}

const CreateTravel: React.FC = () => {
  const [profile, setProfile] = useAtom(globalAtom);
  const [{ current, cleared, data }, setStep] = useState(initialFormState);

  const onFirstStep = current === 0;
  const onLastStep = current === formSteps.length - 1;
  const completed = current === formSteps.length;
  const cantGoForward = current + 1 > cleared;
  const ratioComplete = cleared / formSteps.length;

  function goBack() {
    if (current !== 0) setStep((s) => ({ ...s, current: s.current - 1 }));
  }

  function goForward() {
    if (current + 1 <= cleared)
      setStep((s) => ({ ...s, current: s.current + 1 }));
  }

  function nextStep() {
    setStep((s) => ({ ...s, cleared: s.cleared + 1, current: s.current + 1 }));
  }

  async function handleSubmit(
    values: TravelFormValues,
    actions: FormikHelpers<TravelFormValues>
  ): Promise<void> {
    if (current < cleared) {
      goForward();
    } else if (!completed && !onLastStep) {
      nextStep();
      actions.setTouched({});
      actions.setSubmitting(false);
    } else {
      const travel = await API.createTravel(values);
      setProfile({ ...profile, travels: profile.travels.concat(travel) });
      setStep((s) => ({ ...s, data: travel }));
      actions.setSubmitting(false);
      nextStep();
    }
  }

  return (
    <Fullscreen
      overFlow
      style={{ padding: "26px 26px 96px", justifyContent: "space-between" }}
    >
      <StepIndicator ratioComplete={ratioComplete} />
      {!completed ? (
        <>
          <StepNavigation>
            <StepButton left onClick={goBack} disabled={onFirstStep}>
              <ArrowIcon />
            </StepButton>
            <Text title>{formSteps[current].title}</Text>
            <StepButton onClick={goForward} disabled={cantGoForward}>
              <ArrowIcon />
            </StepButton>
          </StepNavigation>
          <Formik
            initialValues={initialFormValues}
            onSubmit={handleSubmit}
            validationSchema={formSteps[current].schema}
          >
            {({ isSubmitting }) => (
              <FormWrapper>
                {renderStep(current)}
                {isSubmitting && <LoadingOverlay />}
                <Button filled type="submit" disabled={isSubmitting}>
                  {onLastStep ? "Submit" : "next"}
                </Button>
              </FormWrapper>
            )}
          </Formik>
        </>
      ) : (
        <FormCompleted travelId={data.id} />
      )}
    </Fullscreen>
  );
};

export default CreateTravel;
