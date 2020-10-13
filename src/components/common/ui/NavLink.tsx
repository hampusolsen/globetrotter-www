import React from "react";
import { LinkProps, useRouteMatch } from "react-router-dom";
import { StyledNavLink } from "./NavLink.style";

const NavLink: React.FC<LinkProps> = ({ to, ...rest }) => {
    const match = useRouteMatch(to as string);

    return <StyledNavLink isActive={!!match} to={to} {...rest} />;
};

export default NavLink;
