import React from "react";
import styled from "styled-components";
import { ChildrenOnlyProps } from "../../../resources/types/commonProps";
import { useViewportSize } from "../../../resources/util/hooks";

const Wrapper = styled.div<{ height: number; width: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const Fullscreen: React.FC<ChildrenOnlyProps> = ({ children }) => {
  const viewportSize = useViewportSize();

  return <Wrapper {...viewportSize}>{children}</Wrapper>;
};

export default Fullscreen;
