import { Form } from "formik";
import styled from "styled-components";
import { color } from "../../../resources/style/variables.style";

export const Indicators = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
`;

export const Indicator = styled.li`
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

export const Ball = styled.div`
  margin: 0 auto;
  background-color: ${color.blue};
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

export const FormWrapper = styled(Form)`
  flex: 1;
  display: flex;
  flex-direction: column;

  button {
    margin-top: auto;
    width: 100%;
  }
`;
