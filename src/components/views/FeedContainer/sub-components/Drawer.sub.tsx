import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { color } from "../../../../resources/style/variables.style";
import feedState from "../../../../store/feed.state";

const Wrapper = styled.aside<{ isOpen: boolean }>`
  z-index: 25;
  height: 100%;
  width: 80%;
  position: absolute;
  right: 0;
  background-color: white;
  transition: 0.3s;
  box-shadow: 0 0 15px ${color.darkgrey}50;
  ${({ isOpen }) => `transform: translateX(${isOpen ? 0 : 105}%)`}
`;

const Drawer: React.FC = () => {
  const [state] = useAtom(feedState);
  return <Wrapper isOpen={state.menuIsOpen}>Menu</Wrapper>;
};

export default Drawer;
