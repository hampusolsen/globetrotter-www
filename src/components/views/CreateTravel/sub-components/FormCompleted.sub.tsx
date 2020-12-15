import { useAtom } from "jotai";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RoutePaths from "../../../../config/router.config";
import { color } from "../../../../resources/style/variables.style";
import { toggleFormAction } from "../../../../store/happeningForm/happeningForm.actions";
import { happeningFormReducerAtom } from "../../../../store/happeningForm/happeningForm.state";
import LuggageIcon from "../../../common/icons/Luggage.icon";
import Text from "../../../common/Text";

const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 120px;
    height: 120px;
    margin-bottom: 36px;
  }

  h1 {
    font-size: 42px;
    margin-bottom: 18px;
  }

  > p {
    width: 70%;
    text-align: center;
    margin-bottom: 24px;
  }
`;

const TravelLink = styled(Link)`
  text-decoration: none;
  color: ${color.blue};
  text-transform: uppercase;
  min-width: 74px;
  height: 36px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 16px;
  border-radius: 4px;
`;

interface Props {
  travelId: string;
}

const FormCompleted: React.FC<Props> = ({ travelId }) => {
  const [, dispatch] = useAtom(happeningFormReducerAtom);

  return (
    <Section>
      <LuggageIcon />
      <Text display>Bon voyage!</Text>
      <Text>
        Can&apos;t wait to add happenings and upload images to this travel?
      </Text>
      <TravelLink
        to={`/${RoutePaths.FEED}/${RoutePaths.MAP}`}
        onClick={() => dispatch(toggleFormAction(true, { travelId }, 1))}
      >
        <Text bold>Click here</Text>
      </TravelLink>
    </Section>
  );
};

export default FormCompleted;
