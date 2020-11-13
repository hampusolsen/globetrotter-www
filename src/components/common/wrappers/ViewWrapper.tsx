import styled from "styled-components";

interface Props {
  center?: boolean;
  spaceBetween?: boolean;
  spaceEvenly?: boolean;
}

const ViewWrapper = styled.div<Props>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${(props) => props.center && "align-items: center;"}
  ${(props) => props.spaceBetween && "justify-content: space-between;"}
  ${(props) => props.spaceEvenly && "justify-content: space-evenly;"}
`;

export default ViewWrapper;
