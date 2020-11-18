import { Formik, validateYupSchema } from "formik";
import React, { useState } from "react";
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
import {
  handleSubmit,
  hasErrors,
  renderStep,
  stepValidations
} from "./CreateTravel.util";

export interface TravelFormValues
  extends Pick<Travel, "title" | "description"> {
  images: undefined | FileList;
  from_date: undefined | Date;
  to_date: undefined | Date;
}

const initialFormValues: TravelFormValues = {
  title: "",
  description: "",
  from_date: undefined,
  to_date: undefined,
  images: undefined
};

const CreateTravel: React.FC = () => {
  const [step, setStep] = useState(0);

  return (
    <Fullscreen
      style={{ padding: "26px 26px 96px", justifyContent: "space-between" }}
    >
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validateOnChange={false}
      >
        {(props) =>
          step < 3 ? (
            <>
              <Indicators>
                {Array.from(Array(3)).map((_, idx) => (
                  <Indicator key={`${idx + 1}`}>
                    <Ball className={idx === step ? "active" : ""} />
                  </Indicator>
                ))}
              </Indicators>
              <FormWrapper>
                {renderStep(step)}
                <Button
                  filled
                  onClick={() => {
                    validateYupSchema(
                      props.values,
                      stepValidations[step].schema
                    )
                      .then(() => {
                        setStep((currentStep) => currentStep + 1);
                      })
                      .catch((errors) => {
                        props.setErrors(errors);
                      });
                  }}
                  disabled={hasErrors(props.errors)}
                >
                  Next
                </Button>
              </FormWrapper>
            </>
          ) : (
            <FormWrapper>
              <Button filled type="submit" color={color.lightgreen}>
                Submit
              </Button>
            </FormWrapper>
          )
        }
      </Formik>
    </Fullscreen>
  );
};

export default CreateTravel;
