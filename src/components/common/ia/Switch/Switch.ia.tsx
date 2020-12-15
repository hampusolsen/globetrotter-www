import React from "react";
import styled from "styled-components";
import { absoluteCenter } from "../../../../resources/style/css.style";

const Wrapper = styled.label`
  width: 32px;
  height: 32px;
  position: relative;

  input[type="checkbox"] {
    visibility: hidden;
    &:checked ~ svg {
      &:first-of-type {
        opacity: 1;
      }

      &:last-of-type {
        opacity: 0;
      }
    }
  }

  svg {
    ${absoluteCenter}
    transition: 0.3s;
    &:first-of-type {
      opacity: 0;
    }
    &:last-of-type {
      opacity: 1;
    }
  }
`;

interface Props {
  ActiveIcon: React.FC;
  InactiveIcon: React.FC;
  label: string;
  onChange: () => void;
  onClick?: () => void;
}

const Switch: React.FC<Props> = ({
  ActiveIcon,
  InactiveIcon,
  label,
  onChange,
  onClick
}) => {
  return (
    <Wrapper htmlFor={label} aria-label={label} onClick={onClick}>
      <input id={label} type="checkbox" onChange={onChange} />
      <ActiveIcon />
      <InactiveIcon />
    </Wrapper>
  );
};

export default Switch;
