import { Formik, FormikHelpers, FormikProps, FormikValues } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { color } from "../../../resources/style/variables.style";
import { Travel } from "../../../store/types.state";
import Button from "../../common/ia/Button/Button.ia";
import Fullscreen from "../../common/wrappers/Fullscreen";
import {
  Ball,
  FormWrapper,
  Indicator,
  Indicators
} from "./CreateTravel.styled";
import FirstSection from "./sub-components/FirstSection.sub";
import SecondSection from "./sub-components/SecondSection.sub";
import ThirdSection from "./sub-components/ThirdSection.sub";

/**
 * Renders correct step of the multi part travel form.
 *
 * @param step number
 * @param props FormikProps<FormikValues>
 *
 * @returns React.FC
 */
function renderStep(step: number, props: FormikProps<FormikValues>) {
  switch (step) {
    case 0:
      return <FirstSection {...props} />;
    case 1:
      return <SecondSection {...props} />;
    case 2:
      return <ThirdSection {...props} />;
    default:
      return null;
  }
}

export interface TravelFormValues extends Omit<Travel, "happenings"> {
  images: undefined | FileList;
}

const initialFormValues: TravelFormValues = {
  title: "",
  description: "",
  to_date: new Date(),
  from_date: new Date(),
  images: undefined
};

const validationSchema = yup.object({
  title: yup.string().required().min(3).max(32).label("Title"),
  description: yup.string().notRequired().max(400).label("Description")
});

const CreateTravel: React.FC = () => {
  const [step, setStep] = useState(0);

  async function handleSubmit(
    values: TravelFormValues,
    _actions: FormikHelpers<TravelFormValues>
  ) {
    // eslint-disable-next-line no-console
    console.log(values);
  }

  return (
    <Fullscreen
      style={{ padding: "26px 26px 96px", justifyContent: "space-between" }}
    >
      <Indicators>
        {Array.from(Array(3)).map((_, idx) => (
          <Indicator key={`${idx + 1}`}>
            <Ball
              className={idx === step ? "active" : ""}
              onClick={() => setStep(idx)}
            />
          </Indicator>
        ))}
      </Indicators>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange
      >
        {(props: FormikProps<FormikValues>) => (
          <FormWrapper>
            {renderStep(step, props)}
            {step < 2 && (
              <Button filled onClick={() => setStep((step) => step + 1)}>
                Next
              </Button>
            )}
            {step === 2 && (
              <Button filled type="submit" color={color.lightgreen}>
                Submit
              </Button>
            )}
          </FormWrapper>
        )}
      </Formik>
    </Fullscreen>
  );
};

export default CreateTravel;
