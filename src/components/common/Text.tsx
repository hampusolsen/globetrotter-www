import React from "react";
import styled from "styled-components";
import { color, font, media } from "../../resources/style/variables.style";

interface StyleProps {
  color?: string;
  italic?: boolean;
  bold?: boolean;
}

const Display = styled.h1<StyleProps>`
  font-family: ${font.family.display};
  font-size: 32px;
  font-weight: bold;
  color: ${color.blue};
`;

const Title = styled.h1<StyleProps>`
  font-family: ${font.family.heading};
  font-size: 18px;
  font-weight: bold;
  color: ${color.blue};
`;

const Subtitle = styled.h2<StyleProps>``;

const Heading = styled.h3<StyleProps>`
  font-family: ${font.family.heading};
  font-size: 14px;
  color: ${(props) => props.color || "black"};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};

  ${media.laptop} {
    font-size: 16px;
  }
`;

const Bread = styled.p<StyleProps>`
  font-family: ${font.family.bread};
  font-size: 14px;
  color: ${(props) => props.color || "black"};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};

  ${media.laptop} {
    font-size: 16px;
  }
`;

const Misc = styled.span<StyleProps>`
  font-family: ${font.family.bread};
  font-size: 12px;
  letter-spacing: 0.5px;
  color: ${(props) => props.color || "black"};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};

  ${media.desktop} {
    font-size: 14px;
  }
`;

type TextComponentType =
  | typeof Display
  | typeof Title
  | typeof Subtitle
  | typeof Heading
  | typeof Bread
  | typeof Misc;

interface Props extends StyleProps {
  display?: boolean;
  title?: boolean;
  subtitle?: boolean;
  heading?: boolean;
  misc?: boolean;
  className?: string;
  children: string;
}

const Text: React.FC<Props> = ({
  children,
  display,
  title,
  subtitle,
  heading,
  misc,
  ...props
}) => {
  let Component: TextComponentType = Bread;

  if (display) Component = Display;
  if (title) Component = Title;
  if (subtitle) Component = Subtitle;
  if (heading) Component = Heading;
  if (misc) Component = Misc;

  return <Component {...props}>{children}</Component>;
};

export default Text;
