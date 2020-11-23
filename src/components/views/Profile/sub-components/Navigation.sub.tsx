import { useAtom } from "jotai";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import API from "../../../../api/api.client";
import RoutePaths from "../../../../config/router.config";
import { color, media } from "../../../../resources/style/variables.style";
import { useTrailingSlug } from "../../../../resources/util/hooks";
import { globalAtom, globalState } from "../../../../store/profile.state";
import EditIcon from "../../../common/icons/Edit.icon";
import FollowersIcon from "../../../common/icons/Followers.icon";
import LogoutIcon from "../../../common/icons/Logout.icon";
import Text from "../../../common/Text";

const Navigation = styled.nav`
  display: flex;
  justify-content: space-evenly;
  background-color: ${color.lightgreen};
  width: 100%;
  height: 42px;
  position: sticky;
  top: 0;
  z-index: 99;

  ${media.tablet} {
    height: 72px;
  }
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

    ${media.tablet} {
      transform: translateY(-4px);
    }
  }

  ${media.tablet} {
    text-decoration: none;
    color: white;

    span {
      display: block;
      transform: translateY(2px);
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
    pointer-events: none;

    &::after {
      transform: translateY(0) scale(1);
      opacity: 1;

      ${media.tablet} {
        transform: translateY(-12px) scale(1);
      }
    }

    svg {
      transform: translateY(-2px);

      ${media.tablet} {
        transform: translateY(-6px);
      }
    }

    span {
      transform: translateY(0);
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
  const navigate = useNavigate();
  const [, setProfile] = useAtom(globalAtom);
  const slug = useTrailingSlug();

  const active = [RoutePaths.FOLLOWERS, RoutePaths.FOLLOWING].some(
    (route) => slug === route
  );

  async function handleLogout() {
    const userLoggedOut = await API.logoutUser();

    if (userLoggedOut) {
      setProfile(globalState);
      navigate(RoutePaths.ROOT);
    }
  }

  return (
    <Navigation>
      <Link
        to={`${RoutePaths.CONTACTS}/${RoutePaths.FOLLOWERS}`}
        className={active ? "active" : ""}
      >
        <FollowersIcon />
        <Text misc color="white">
          Contacts
        </Text>
      </Link>
      <Link to={`profile/${RoutePaths.EDIT}`}>
        <EditIcon />
        <Text misc color="white">
          Edit Profile
        </Text>
      </Link>
      <LogoutButton type="button" onClick={handleLogout}>
        <LogoutIcon />
        <Text misc color="white">
          Log Out
        </Text>
      </LogoutButton>
    </Navigation>
  );
};

export default ProfileNavigation;
