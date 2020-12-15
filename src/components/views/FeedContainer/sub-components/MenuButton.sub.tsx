import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import {
  centerCenter,
  pseudoBoilerplate,
  resetButtonStyle
} from "../../../../resources/style/css.style";
import { color } from "../../../../resources/style/variables.style";
import { drawerAtom } from "../../../../store/drawer.state";

const Button = styled.button<{ isOpen: boolean }>`
  ${resetButtonStyle}
  ${centerCenter}
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: white;
  top: 14px;
  right: 14px;
  position: absolute;
  z-index: 50;

  &::after {
    ${pseudoBoilerplate}
    width: 32px;
    height: 32px;
    border-radius: 50%;
    z-index: -2;
    box-shadow: 0 0 6px ${color.darkgrey}80;
    transition: 0.3s;
    ${({ isOpen }) => isOpen && "opacity: 0;"}
  }
`;

const Hamburger = styled.div<{ isOpen: boolean }>`
  width: 16px;
  height: 2px;
  background-color: grey;
  position: absolute;
  transition: 0.3s;
  ${({ isOpen }) =>
    isOpen &&
    `
      transform: rotate(45deg);
    `}

  &::after,
  &::before {
    ${pseudoBoilerplate}
    background-color: grey;
    transition: 0.3s;
  }

  &::after {
    top: -4px;
    ${({ isOpen }) =>
      isOpen &&
      `
      transform: translate(-50%, calc(-50% + 5px));
      opacity: 0;
    `}
  }

  &::before {
    top: 6px;
    ${({ isOpen }) =>
      isOpen &&
      `
      transform: translate(-50%, calc(-50% + -5px)) rotate(-90deg);
    `}
  }
`;

const MenuButton: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useAtom(drawerAtom);

  return (
    <Button isOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}>
      <Hamburger isOpen={menuIsOpen} />
    </Button>
  );
};

export default MenuButton;
