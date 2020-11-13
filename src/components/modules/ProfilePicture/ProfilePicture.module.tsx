import React from "react";
import styled from "styled-components";
import ProfileIcon from "../../common/icons/Profile.icon";

const Wrapper = styled.div<Omit<Props, "source">>`
  border-radius: 50%;
  background: grey;
  fill: white;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${({ size }) =>
    size === "small" &&
    `
    height: 24px;
    width: 24px;

    svg {
      height: 26px;
      width: 26px;
    }
  `}

  ${({ size }) =>
    size === "large" &&
    `
    height: 70px;
    width: 70px;

    svg {
      height: 72px;
      width: 72px;
    }
  `}
`;

interface Props {
  size: "small" | "large";
  source?: string;
}

const ProfilePicture: React.FC<Props> = ({ source, ...rest }) => {
  return (
    <Wrapper {...rest}>
      {source ? <img src={source} alt="profile" /> : <ProfileIcon />}
    </Wrapper>
  );
};

export default ProfilePicture;
