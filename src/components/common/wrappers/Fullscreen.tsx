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
  style?: React.CSSProperties;
}

const Wrapper = styled.div<StyleProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  ${({ overFlow }) => overFlow && "overflow: hidden auto;"}
  top: 0;
  left: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  ${media.tablet} {
    position: relative;
  }
`;

const Fullscreen: React.FC<Props> = ({ children, ...rest }) => {
  const viewportSize = useViewportSize();

  return (
    <Wrapper {...viewportSize} {...rest}>
      {children}
    </Wrapper>
  );
};

export default Fullscreen;
