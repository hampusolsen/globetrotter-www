import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import RoutePaths from "../../../config/router.config";
import { color } from "../../../resources/style/variables.style";
import AddIcon from "../../common/icons/Add.icon";
import MapIcon from "../../common/icons/Map.icon";
import ProfileIcon from "../../common/icons/Profile.icon";

const Wrapper = styled.nav`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52px;
  background-color: ${color.grey};
  border-top: 5px solid ${color.darkgrey};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const menuItems = [
  { name: "map", to: RoutePaths.MAP, Icon: MapIcon },
  { name: "add_travel", to: RoutePaths.ADD_TRAVEL, Icon: AddIcon },
  { name: "my_profile", to: RoutePaths.MY, Icon: ProfileIcon }
];

const Navigation: React.FC = () => {
  return (
    <Wrapper>
      {menuItems.map(({ name, to, Icon }) => (
        <NavLink key={name} to={to} activeStyle={{ fill: "white" }}>
          <Icon />
        </NavLink>
      ))}
    </Wrapper>
  );
};

export default Navigation;
