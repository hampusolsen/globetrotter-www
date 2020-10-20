import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(Link)<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "red" : "blue")};
`;

export default StyledNavLink;
