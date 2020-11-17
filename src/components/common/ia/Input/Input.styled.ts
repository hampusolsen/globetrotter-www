import styled from "styled-components";
import { color, media } from "../../../../resources/style/variables.style";

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
  border-color: ${(props) => (props.error ? color.red : "grey")};
  ${({ type }) =>
    type === "file" &&
    `
    margin-top: 0;
    pointer: cursor;
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
      font-size: 14px;
      transform: translate(54px, -50%);
    }
  }

  input[type="text"],
  input[type="password"],
  input[type="email"] {
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
  }

  p {
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

  span {
    position: absolute;
    bottom: -16px;
    left: 4px;
  }
`;

export default Label;
