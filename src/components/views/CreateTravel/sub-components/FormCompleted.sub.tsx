import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RoutePaths from "../../../../config/router.config";
import Text from "../../../common/Text";

const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TravelLink = styled(Link)``;

interface Props {
  travelId: string;
}

const FormCompleted: React.FC<Props> = ({ travelId }) => {
  return (
    <Section>
      <Text display>Awesome!</Text>
      <Text>Now you can add happenings and upload images to this travel.</Text>
      <div>
        <Text>Interested?</Text>
        <TravelLink to={`/${RoutePaths.MAP}/${RoutePaths.EDIT}/${travelId}`}>
          Click here
        </TravelLink>
      </div>
    </Section>
  );
};

export default FormCompleted;
