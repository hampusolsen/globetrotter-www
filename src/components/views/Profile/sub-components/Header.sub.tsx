import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { color, font } from "../../../../resources/style/variables.style";
import profileState from "../../../../store/profile.state";
import ProfilePicture from "../../../modules/ProfilePicture/ProfilePicture.module";

const Header = styled.header`
  height: 200px;
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

    > span {
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
  const [profile] = useAtom(profileState);
  return (
    <Header>
      <div>
        <ProfilePicture size="large" />
        <span>{profile.displayName}</span>
      </div>
      <StatisticsList>
        <Statistic>
          {profile.followers ? profile.followers.length : 0}
          <span>Followers</span>
        </Statistic>
        <Statistic>
          {profile.following ? profile.following.length : 0}
          <span>Following</span>
        </Statistic>
        <Statistic>
          {profile.travels ? profile.travels.length : 0}
          <span>Travels</span>
        </Statistic>
      </StatisticsList>
    </Header>
  );
};

export default ProfileHeader;
