import styled from "styled-components";
import { pseudoBoilerplate } from "../../../../resources/style/css.style";
import {
  color,
  font,
  media
} from "../../../../resources/style/variables.style";

interface StyleProps {
  error?: boolean;
  type: string;
}

const Label = styled.label<StyleProps>`
  position: relative;
  display: inline-block;
  height: 36px;
  min-width: 220px;
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 22px;
  background-color: whitesmoke;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${({ error }) => (error ? color.red : "grey")};
  ${({ type }) =>
    type === "file" &&
    `
    margin-top: 0;
    pointer: cursor;
  `}

  ${({ type }) =>
    type === "textarea" &&
    `
    background: none;
    border: none;
  `}

  ${({ type }) =>
    type === "date" &&
    `
    > div.react-datepicker-wrapper {
      position: relative;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      visibility: hidden;
    }
  `}

  ${({ type }) =>
    type === "radio" &&
    `
    background: none;
    margin: 0;
    border: none;
  `}

  svg {
    position: absolute;
    left: 0;
    padding: 5.5px 14px;
    background-color: ${color.blue};
    fill: white;
    border-radius: 4px;
  }

  input[type="file"] {
    visibility: hidden;

    + p {
      position: absolute;
      top: 50%;
      font-size: 14px;
      transform: translate(62px, -50%);
    }
  }

  input[type="text"],
  input[type="password"],
  input[type="email"],
  textarea {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: none;
    outline: none;
    border: none;
    padding-left: 8px;

    &::placeholder {
      visibility: hidden;
    }

    &:placeholder-shown + p {
      transform: translateY(-50%);
      font-size: 14px;
    }

    &:focus + p,
    &:active + p {
      transform: translateY(-32px);
      font-size: 10px;

      ${media.tablet} {
        transform: translateY(-34px);
        font-size: 12px;
      }
    }

    & + p {
      position: absolute;
      top: 50%;
      left: 8px;
      transform: translateY(-32px);
      font-size: 10px;
      color: ${(props) => (props.error ? color.red : "black")};
      transition: 0.18s;
      text-transform: capitalize;

      ${media.tablet} {
        font-size: 12px;
      }
    }
  }

  input[type="radio"] {
    display: none;

    + p {
      position: absolute;
      font-size: 14px;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      display: flex;
      align-items: center;
      padding-left: 46px;
      box-sizing: border-box;

      &::after,
      &::before {
        ${pseudoBoilerplate}
        left: 10%;
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid grey;
        background-color: white;
      }

      &::before {
        width: 12px;
        height: 12px;
        z-index: 1;
      }
    }

    &:checked + p {
      color: white;
      background-color: ${color.blue};
      &::before {
        background-color: ${color.blue};
        border: none;
      }
      &::after {
        border: none;
      }
    }
  }

  p.readable-date {
    position: absolute;
    left: 62px;
    top: 50%;
    transform: translateY(-50%);
  }

  textarea {
    resize: none;
    padding: 8px;
    background-color: whitesmoke;
    border: 1px solid;
    border-color: ${({ error }) => (error ? color.red : "grey")};
    border-radius: 4px;
    min-height: 220px;
    height: 100%;
    max-height: 420px;
    font-family: ${font.family.bread};

    & ~ span {
      position: relative;
      top: -2px;
    }
  }

  span {
    position: absolute;
    bottom: -16px;
    left: 4px;
    color: ${color.red};
  }
`;

export default Label;
