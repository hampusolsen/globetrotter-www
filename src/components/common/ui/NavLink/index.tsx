import React from "react";
import { LinkProps, matchRoutes, useLocation } from "react-router-dom";
import routes from "../../../../config/routes.config";
import { StyledNavLink } from "./NavLink.style";

const NavLink: React.FC<LinkProps> = ({ to, ...rest }) => {
  const location = useLocation();
  const matches = matchRoutes(routes, location) || [];

  const isActive = matches.some((match) => match.pathname === to);

  return <StyledNavLink isActive={isActive} to={to} {...rest} />;
};

export default NavLink;
