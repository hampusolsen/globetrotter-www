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
    size === "medium" &&
    `
    height: 42px;
    width: 42px;

    svg {
      height: 44px;
      width: 44px;
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

  img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
`;

interface Props {
  size?: "small" | "medium" | "large";
  source?: string;
}

const ProfilePicture: React.FC<Props> = ({ source, size }) => {
  return (
    <Wrapper size={size || "medium"}>
      {source ? <img src={source} alt="profile" /> : <ProfileIcon />}
    </Wrapper>
  );
};

export default ProfilePicture;
