import React from "react";
import styled, { css } from "styled-components";
import { color } from "../../../../resources/style/variables.style";
import Text from "../../../common/Text";
import ProfilePicture from "../../../modules/ProfilePicture/ProfilePicture.module";

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  margin: 12px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    margin-left: 8px;
  }

  button {
    margin-left: auto;
  }
`;

const buttonStyle = css`
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 4px 12px;
  font-size: 10px;
  box-sizing: border-box;
  height: 19px;
  display: flex;
  align-items: center;
`;

const ButtonFollow = styled.button`
  ${buttonStyle}
  background: ${color.blue};
  color: white;
`;

const ButtonUnfollow = styled.button`
  ${buttonStyle}
  background: none;
  border: 1px solid ${color.red};
  color: ${color.red};
`;

interface Props {
  name: string;
  source?: string;
  id: string;
  amicable?: boolean;
}

const MinifiedUser: React.FC<Props> = ({ name, source, amicable }) => (
  <Wrapper>
    <ProfilePicture source={source} />
    <Text heading>{name}</Text>
    {amicable ? (
      <ButtonUnfollow>Unfollow</ButtonUnfollow>
    ) : (
      <ButtonFollow>Follow</ButtonFollow>
    )}
  </Wrapper>
);

export default MinifiedUser;
