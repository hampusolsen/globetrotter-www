import React from "react";
// @ts-ignore-next-line
import { LinkProps, matchRoutes, useLocation } from "react-router-dom";
import { routes } from "../../../config/routes.config";
import { StyledNavLink } from "./NavLink.style";

const NavLink: React.FC<LinkProps> = ({ to, ...rest }) => {
    const location = useLocation();
    const match = matchRoutes(routes, location);

    return <StyledNavLink isActive={!!match} to={to} {...rest} />;
};

export default NavLink;
