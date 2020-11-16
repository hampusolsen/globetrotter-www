import React from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import RoutePaths from "../../../../config/router.config";
import { color } from "../../../../resources/style/variables.style";
import { useTrailingSlug } from "../../../../resources/util/hooks";
import Text from "../../../common/Text";

const Navigation = styled.nav`
  position: sticky;
  top: 42px;
  display: flex;
  height: 42px;
  width: 100%;
  z-index: 99;
`;

const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: 0.6s;

  &.active {
    background-color: ${color.lightgrey};
  }

  &:visited {
    color: black;
  }
`;

const Indicator = styled.div<{ translateFactor: number }>`
  position: absolute;
  bottom: 0;
  background-color: ${color.lightgrey};
  height: 1px;
  width: 100%;

  &::after {
    content: "";
    width: 50%;
    height: 100%;
    background-color: ${color.grey};
    position: absolute;
    left: 0;
    transition: 0.2s;
    transform: translateX(${({ translateFactor }) => translateFactor * 100}%);
  }
`;

const UserList = styled.ul`
  padding: 24px 24px 72px;
  box-sizing: border-box;
  width: 100%;
`;

const links = [
  { to: RoutePaths.FOLLOWERS, text: "Followers" },
  { to: RoutePaths.FOLLOWING, text: "Following" }
];

const ProfileContacts: React.FC = () => {
  const slug = useTrailingSlug();
  const matchedIndex = links.findIndex(({ to }) => to === slug);

  if (matchedIndex < 0) return <Navigate to={RoutePaths.FOLLOWERS} />;

  return (
    <>
      <Navigation>
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            <Text misc>{link.text}</Text>
          </Link>
        ))}
        <Indicator translateFactor={matchedIndex} />
      </Navigation>
      <UserList>
        <Outlet />
      </UserList>
    </>
  );
};

export default ProfileContacts;
