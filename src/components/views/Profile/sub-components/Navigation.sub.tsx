import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import RoutePaths from "../../../../config/router.config";
import { color, media } from "../../../../resources/style/variables.style";
import EditIcon from "../../../common/icons/Edit.icon";
import FollowersIcon from "../../../common/icons/Followers.icon";
import LogoutIcon from "../../../common/icons/Logout.icon";

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  background-color: ${color.lightgreen};
  width: 100%;
  height: 42px;
`;

const menuItemStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  fill: ${color.smokewhite};

  span {
    display: none;
  }

  svg {
    z-index: 1;
  }

  ${media.tablet} {
    span {
      display: block;
    }
  }
`;

const Link = styled(NavLink)`
  ${menuItemStyle};
  box-sizing: border-box;

  &::after {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    border-radius: 50%;
    background: ${color.green};
    transform: translateY(50%) scale(0.5);
    opacity: 0;
    transition: 0.2s ease-out;
  }

  &.active {
    position: relative;
    border-top: 3px solid ${color.green};

    &::after {
      transform: translateY(0) scale(1);
      opacity: 1;
    }

    svg {
      transform: translateY(-2px);
    }
  }
`;

const LogoutButton = styled.button`
  ${menuItemStyle};
  background: none;
  border: none;
  outline: none;
  padding: 0;
`;

const ProfileNavigation: React.FC = () => {
  function handleLogout() {}

  return (
    <Nav>
      <Link to={RoutePaths.CURRENT_ROOT} end>
        <FollowersIcon />
        <span>Fellow Trotters</span>
      </Link>
      <Link to={RoutePaths.EDIT}>
        <EditIcon />
        <span>Edit Profile</span>
      </Link>
      <LogoutButton type="button" onClick={handleLogout}>
        <LogoutIcon />
        <span>Log Out</span>
      </LogoutButton>
    </Nav>
  );
};

export default ProfileNavigation;
