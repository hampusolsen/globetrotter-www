import { css } from "styled-components";

export const centerCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const resetButtonStyle = css`
  outline: none;
  border: none;
  background: none;
`;

export const pseudoBoilerplate = css`
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
