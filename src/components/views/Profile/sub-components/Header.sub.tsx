import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { color, font } from "../../../../resources/style/variables.style";
import { globalAtom } from "../../../../store/profile.state";
import Text from "../../../common/Text";
import ProfilePicture from "../../../modules/ProfilePicture/ProfilePicture.module";

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

const StatisticsList = styled.ul`
  display: flex;
`;

const Statistic = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${color.grey};
  margin: 0 8px;
  width: 56px;

  > span {
    font-family: ${font.family.heading};
    font-size: 12px;
    margin-top: 4px;
  }
`;

const ProfileHeader: React.FC = () => {
  const [profile] = useAtom(globalAtom);

  return (
    <Header>
      <div>
        <ProfilePicture size="large" source={profile.profilePic} />
        <Text>{profile.displayName}</Text>
      </div>
      <StatisticsList>
        <Statistic>
          {profile.followers ? profile.followers.length : 0}
          <Text misc>Followers</Text>
        </Statistic>
        <Statistic>
          {profile.following ? profile.following.length : 0}
          <Text misc>Following</Text>
        </Statistic>
        <Statistic>
          {profile.travels ? profile.travels.length : 0}
          <Text misc>Travels</Text>
        </Statistic>
      </StatisticsList>
    </Header>
  );
};

export default React.memo(ProfileHeader);
