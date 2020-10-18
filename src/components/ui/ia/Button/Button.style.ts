import styled, { css } from "styled-components";
import * as variables from "../../../../resources/style/variables.style";
import { IButtonProps } from "./Button.types";

const { font, media, color } = variables;

const phoneCSS = css`
  font-size: ${font.heading.size.phone}em;
`;

const tabletCSS = css`
  font-size: ${font.heading.size.tablet}em;
`;

const laptopCSS = css`
  font-size: ${font.heading.size.laptop}em;
`;

const StyledButton = styled.button<IButtonProps>`
  height: 36px;
  min-width: 72px;
  padding: 0 14px;
  border-radius: 4px;
  font-family: ${font.bread.family};
  text-transform: uppercase;
  letter-spacing: 1px;
  outline: none;
  ${(props) =>
    props.filled &&
    `
      background-color: ${props.color || color.blue};
      border: none;
      color: white;
      &:hover {
        box-shadow: inset 0 0 150px 0 rgba(255, 255, 255, 0.25);
      }
      &:active {
        box-shadow: inset 0 0 150px 0 rgba(0, 0, 0, 0.25);
      }
    `}
  ${(props) =>
    props.text &&
    `
      border: none;
      background: none;
      color: ${props.color || color.red};
      &:hover {
        background-color: ${props.color || color.red};
        box-shadow: inset 0 0 150px 0px rgba(255, 255, 255, 1);
      }
      &:active {
        background-color: ${props.color || color.red};
        box-shadow: inset 0 0 150px 0px rgba(255, 255, 255, 0.7);
      }
    `}
  ${(props) =>
    props.outlined &&
    `
      border: 2px solid ${props.color || color.lightgreen};
      color: ${props.color || color.lightgreen};
      background: none;
      &:hover {
        background-color: ${props.color || color.lightgreen};
        box-shadow: inset 0 0 150px 0px rgba(255, 255, 255, 1);
      }
      &:active {
        background-color: ${props.color || color.lightgreen};
        box-shadow: inset 0 0 150px 0px rgba(255, 255, 255, 0.7);
      }
    `}
  ${media.laptop} {
    ${laptopCSS}
  }
  ${media.tablet} {
    ${tabletCSS}
  }
  ${media.phone} {
    ${phoneCSS}
  }
`;

export default StyledButton;
