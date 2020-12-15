import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import API from "../../../api/api.client";
import { happeningFormReducerAtom } from "../../../store/happeningForm/happeningForm.state";
import { setTravelsAction } from "../../../store/map/map.actions";
import { mapReducerAtom } from "../../../store/map/map.state";
import Fullscreen from "../../common/wrappers/Fullscreen";
import CreateHappening from "./outlets/Map/sub-components/CreateHappening/CreateHappening.sub";
import Drawer from "./sub-components/Drawer.sub";
import MenuButton from "./sub-components/MenuButton.sub";
import Navigation from "./sub-components/Navigation.sub";

const Wrapper = styled.div`
  flex: 1;
  position: relative;
`;

const FeedContainer: React.FC = () => {
  const [formState] = useAtom(happeningFormReducerAtom);
  const [, mapDispatch] = useAtom(mapReducerAtom);

  useEffect(() => {
    (async () => {
      const travels = await API.fetchTravels();
      mapDispatch(setTravelsAction(travels));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fullscreen>
      <Wrapper>
        <MenuButton />
        <Drawer />
        <Outlet />
      </Wrapper>
      <Navigation />
      {formState.isOpen && <CreateHappening />}
    </Fullscreen>
  );
};

export default FeedContainer;
