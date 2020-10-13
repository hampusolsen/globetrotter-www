import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(Link)<{ readonly isActive: boolean }>`
    color: ${(props) => (props.isActive ? "red" : "blue")};
`;
