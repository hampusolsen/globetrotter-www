import styled, { css } from "styled-components";
import {
  color,
  font,
  media
} from "../../../../resources/style/variables.style";
import { IButtonProps } from "./Button.types";

const phoneStyle = css`
  font-size: ${font.button.size.phone}em;
`;

const tabletStyle = css`
  font-size: ${font.heading.size.tablet}em;
`;

const laptopStyle = css`
  font-size: ${font.heading.size.laptop}em;
`;

const filledStyle = (props: IButtonProps) => css`
  background-color: ${props.color || color.blue};
  border: none;
  color: white;
  &:hover {
    box-shadow: inset 0 0 150px 0 rgba(255, 255, 255, 0.25);
  }
  &:active {
    box-shadow: inset 0 0 150px 0 rgba(0, 0, 0, 0.25);
  }
`;

const textStyle = (props: IButtonProps) => css`
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
`;

const outlinedStyle = (props: IButtonProps) => css`
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
`;

const StyledButton = styled.button<IButtonProps>`
  height: 36px;
  min-width: 72px;
  padding: 0 14px;
  border-radius: 4px;
  font-family: ${font.bread.family};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  outline: none;
  ${(props) => props.filled && filledStyle}
  ${(props) => props.text && textStyle}
  ${(props) => props.outlined && outlinedStyle}
  ${media.laptop} {
    ${laptopStyle}
  }
  ${media.tablet} {
    ${tabletStyle}
  }
  ${media.phone} {
    ${phoneStyle}
  }
`;

export default StyledButton;
