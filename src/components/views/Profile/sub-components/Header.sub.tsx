import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { color, font } from "../../../../resources/style/variables.style";
import { profileAtom } from "../../../../store/global.state";
import Text from "../../../common/Text";
import ProfilePicture from "../../../modules/ProfilePicture/ProfilePicture.module";
import ProfileStats from "../../../modules/ProfileStats/ProfileStats.module";

const Header = styled.header`
  min-height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${color.lightgrey};
  font-family: ${font.family.bread};

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
      margin-top: 8px;
    }
  }
`;

const ProfileHeader: React.FC = () => {
  const [profile] = useAtom(profileAtom);

  return (
    <Header>
      <div>
        <ProfilePicture size="large" source={profile.profilePic} />
        <Text>{profile.displayName}</Text>
      </div>
      <ProfileStats {...profile.stats} />
    </Header>
  );
};

export default React.memo(ProfileHeader);
