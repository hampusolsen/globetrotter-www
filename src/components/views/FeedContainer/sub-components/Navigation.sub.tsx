import { useAtom } from "jotai";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import RoutePaths from "../../../../config/router.config";
import { centerCenter } from "../../../../resources/style/css.style";
import { color } from "../../../../resources/style/variables.style";
import { useTrailingSlug } from "../../../../resources/util/hooks";
import { drawerAtom } from "../../../../store/drawer.state";
import GlobeIcon from "../../../common/icons/Globe.icon";
import TicketIcon from "../../../common/icons/Ticket.icon";

const Nav = styled.nav<{ translateBy: number }>`
  flex: 0 0 120px;
  box-sizing: border-box;
  display: flex;
  box-shadow: 0 0 8px ${color.darkgrey}50;
  z-index: 50;

  &::after {
    content: "";
    width: 150%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      whitesmoke 33.33%,
      white 33.33%,
      white 66.66%,
      whitesmoke 66.66%
    );
    position: absolute;
    z-index: -1;
    ${({ translateBy }) => `transform: translateX(-${translateBy}%);`}
    transition: 0.12s;
  }
`;

const Link = styled(NavLink)`
  ${centerCenter}
  flex: 1;
  height: calc(100% - 49px);

  svg {
    fill: ${color.darkgrey};
    transform-origin: bottom;
    transition: 0.15s;
  }

  &.active svg {
    transform: scale(1.25);
  }
`;

const links = [
  { to: RoutePaths.CURRENT_ROOT, end: true, Icon: TicketIcon, name: "feed" },
  { to: RoutePaths.MAP, end: true, Icon: GlobeIcon, name: "map" }
];

const Navigation: React.FC = () => {
  const [, setDrawerOpen] = useAtom(drawerAtom);
  const slug = useTrailingSlug();
  const translateBy = slug === "feed" ? 0 : 33.33;

  return (
    <Nav translateBy={translateBy}>
      {links.map(({ to, end, Icon, name }) => (
        <Link key={name} to={to} end={end} onClick={() => setDrawerOpen(false)}>
          <Icon />
        </Link>
      ))}
    </Nav>
  );
};

export default Navigation;
