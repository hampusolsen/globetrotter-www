import { Form, Formik, FormikHelpers, FormikProps, FormikValues } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import { color, font } from "../../../resources/style/variables.style";
import { Travel } from "../../../store/types.state";
import Button from "../../common/ia/Button/Button.ia";
import Input from "../../common/ia/Input/Input.ia";
import Fullscreen from "../../common/wrappers/Fullscreen";

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
      return <Input name="title" {...props} />;
    case 1:
      return <Input name="description" type="textarea" {...props} />;
    case 2:
      return <Input name="images" type="file" multiple {...props} />;
    default:
      return null;
  }
}

const Navigation = styled.nav``;

const Indicators = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
`;

const Indicator = styled.li`
  flex: 1;
  text-align: center;
  position: relative;
  display: flex;

  &::after,
  &::before {
    content: "";
    height: 2px;
    width: 50%;
    background-color: ${color.blue};
    position: absolute;
    top: calc(50% - 0.5px);
    right: 0;
    z-index: -1;
  }

  &::before {
    left: 0;
  }

  &:first-child::before,
  &:last-child::after {
    display: none;
  }
`;

const Ball = styled.span`
  margin: 0 auto;
  background-color: ${color.blue};
  font-family: ${font.family.bread};
  font-size: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0 0 7px ${color.blue};
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    left: calc(50%);
  }

  &::before {
    border-top-color: ${color.blue};
    top: 10px;
    transform: translate(-50%, 50%);
  }

  &::after {
    border-bottom-color: ${color.blue};
    top: 16px;
    border-radius: 50%;
    opacity: 0;
    transform: translate(-50%, 75%);
    transition: 0.3s;
  }

  &.active::after {
    opacity: 1;
    transform: translate(-50%, 25%);
  }
`;

const FormWrapper = styled.div``;

const CreateTravel: React.FC = () => {
  const [step, setStep] = useState(0);

  const initialFormValues: Travel = {
    title: "",
    description: "",
    happenings: [],
    to_date: new Date(),
    from_date: new Date()
  };

  async function handleSubmit(values: Travel, _actions: FormikHelpers<Travel>) {
    // eslint-disable-next-line no-console
    console.log(values);
  }

  return (
    <Fullscreen>
      <Navigation>Navigation</Navigation>
      <Indicators>
        {Array.from(Array(3)).map((_v, idx) => (
          <Indicator key={`${idx + 1}`}>
            <Ball className={idx === step ? "active" : ""}>{idx + 1}</Ball>
          </Indicator>
        ))}
      </Indicators>
      <FormWrapper>
        <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
          {(props: FormikProps<FormikValues>) => (
            <Form>
              {renderStep(step, props)}
              <Button onClick={() => setStep((step) => step + 1)}>Step</Button>
              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </Fullscreen>
  );
};

export default CreateTravel;
