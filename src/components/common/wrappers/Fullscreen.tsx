import React from "react";
import styled from "styled-components";
import { media } from "../../../resources/style/variables.style";
import { useViewportSize } from "../../../resources/util/hooks";

interface InheritedProps {
  overFlow?: boolean;
}

interface StyleProps extends InheritedProps {
  height: number;
  width: number;
}

interface Props extends InheritedProps {
  children: React.ReactNode;
}

const Wrapper = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden hidden;
  top: 0;
  left: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  ${({ overFlow }) =>
    overFlow &&
    `
  overflow-x: hidden;
  overflow-y: auto;
`}

  ${media.tablet} {
    position: relative;
  }
`;

const Fullscreen: React.FC<Props> = ({ children, overFlow = false }) => {
  const viewportSize = useViewportSize();

  return (
    <Wrapper overFlow={overFlow} {...viewportSize}>
      {children}
    </Wrapper>
  );
};

export default Fullscreen;
