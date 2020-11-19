import { Form } from "formik";
import styled from "styled-components";
import {
  centerCenter,
  resetButtonStyle
} from "../../../resources/style/css.style";
import { color } from "../../../resources/style/variables.style";

export const FormWrapper = styled(Form)`
  flex: 1;
  display: flex;
  flex-direction: column;

  > button {
    margin-top: auto;
    width: 100%;
  }
`;

export const StepIndicator = styled.div<{ ratioComplete: number }>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 5px;
  background-color: ${color.lightgreen}20;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: left;
    ${({ ratioComplete }) => `transform: scaleX(${ratioComplete})`};
    background-color: ${color.lightgreen};
    transition: 0.2s;
  }
`;

export const StepNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  h1 {
    margin: auto;
  }
`;

export const StepButton = styled.button<{ left?: boolean }>`
  ${resetButtonStyle}
  ${centerCenter}
  height: 34px;
  width: 34px;
  background-color: ${color.blue};
  border-radius: 50%;

  svg {
    ${({ left }) => left && "transform: rotate(180deg);"}
    fill: white;
    height: 60%;
    width: 60%;
  }

  &:disabled {
    background: whitesmoke;

    svg {
      fill: grey;
    }
  }
`;
