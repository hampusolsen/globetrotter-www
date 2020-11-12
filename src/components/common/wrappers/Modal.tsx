import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ChildrenOnlyProps } from "../../../resources/types/commonProps";
import { useViewportSize } from "../../../resources/util/hooks";

const Wrapper = styled.div<{ height: number; width: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  z-index: 100;
`;

const Modal: React.FC<ChildrenOnlyProps> = ({ children }) => {
  const viewportSize = useViewportSize();

  return ReactDOM.createPortal(
    <Wrapper {...viewportSize}>{children}</Wrapper>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById("root")!
  );
};

export default Modal;
