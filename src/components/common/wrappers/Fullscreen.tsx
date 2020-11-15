import React from "react";
import styled from "styled-components";
import { media } from "../../../resources/style/variables.style";
import { useViewportSize } from "../../../resources/util/hooks";

interface InheritedProps {
  overflow: boolean | string;
}

interface StyleProps extends InheritedProps {
  height: number;
  width: number;
}

interface Props extends InheritedProps {
  children: React.ReactNode;
}

const Wrapper = styled.div<StyleProps>`
  overflow: hidden hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  ${({ overflow }) =>
    overflow &&
    `
    overflow-x: hidden;
    overflow-y: auto;
  `}

  ${media.tablet} {
    position: relative;
  }
`;

const Fullscreen: React.FC<Props> = ({ children, overflow = false }) => {
  const viewportSize = useViewportSize();

  return (
    <Wrapper overflow={overflow.toString()} {...viewportSize}>
      {children}
    </Wrapper>
  );
};

export default Fullscreen;
