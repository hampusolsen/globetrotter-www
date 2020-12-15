import React from "react";
import styled from "styled-components";
import { font } from "../../../resources/style/variables.style";
import Text from "../../common/Text";

const StatisticsList = styled.ul`
  display: flex;
`;

const Statistic = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
  width: 56px;

  > span {
    font-family: ${font.family.heading};
    font-size: 12px;
    margin-top: 4px;
  }
`;

interface Props {
  followers: number;
  following: number;
  travels: number;
}

const ProfileStats: React.FC<Props> = ({ followers, following, travels }) => {
  return (
    <StatisticsList>
      <Statistic>
        <Text>{followers}</Text>
        <Text misc>Followers</Text>
      </Statistic>
      <Statistic>
        <Text>{following}</Text>
        <Text misc>Following</Text>
      </Statistic>
      <Statistic>
        <Text>{travels}</Text>
        <Text misc>Travels</Text>
      </Statistic>
    </StatisticsList>
  );
};

export default ProfileStats;
