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

  a {
    transition: fill 0.2s;

    &.active {
      fill: white;
    }
  }
`;

const menuItems = [
  { name: "feed", to: RoutePaths.FEED, Icon: MapIcon },
  {
    name: "add_travel",
    to: `${RoutePaths.TRAVEL}/${RoutePaths.NEW}`,
    Icon: AddIcon
  },
  { name: "my_profile", to: RoutePaths.MY, Icon: ProfileIcon }
];

const Navigation: React.FC = () => {
  return (
    <Wrapper>
      {menuItems.map(({ name, to, Icon }) => (
        <NavLink key={name} to={to}>
          <Icon />
        </NavLink>
      ))}
    </Wrapper>
  );
};

export default Navigation;
