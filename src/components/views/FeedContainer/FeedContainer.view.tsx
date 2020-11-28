import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import Fullscreen from "../../common/wrappers/Fullscreen";
import Drawer from "./sub-components/Drawer.sub";
import MenuButton from "./sub-components/MenuButton.sub";
import Navigation from "./sub-components/Navigation.sub";

const Wrapper = styled.div`
  flex: 1;
  position: relative;
`;

const FeedContainer: React.FC = () => {
  return (
    <Fullscreen>
      <Wrapper>
        <MenuButton />
        <Drawer />
        <Outlet />
      </Wrapper>
      <Navigation />
    </Fullscreen>
  );
};

export default FeedContainer;
