import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import {
  centerCenter,
  resetButtonStyle
} from "../../../../resources/style/css.style";
import { color } from "../../../../resources/style/variables.style";
import { drawerAtom } from "../../../../store/drawer.state";
import { profileAtom } from "../../../../store/global.state";
import { toggleFormAction } from "../../../../store/happeningForm/happeningForm.actions";
import { happeningFormReducerAtom } from "../../../../store/happeningForm/happeningForm.state";
import { toggleThemeAction } from "../../../../store/map/map.actions";
import { mapReducerAtom } from "../../../../store/map/map.state";
import Switch from "../../../common/ia/Switch/Switch.ia";
import DarkBulbIcon from "../../../common/icons/DarkBulb.icon";
import LightBulbIcon from "../../../common/icons/LightBulb.icon";
import Text from "../../../common/Text";
import ProfilePicture from "../../../modules/ProfilePicture/ProfilePicture.module";
import ProfileStats from "../../../modules/ProfileStats/ProfileStats.module";

const Wrapper = styled.aside<{ isOpen: boolean }>`
  z-index: 25;
  position: absolute;
  right: 0;
  height: 100%;
  width: 80%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 0 15px ${color.darkgrey}50;
  transition: 0.3s;
  ${({ isOpen }) => `
    transform: translateX(${isOpen ? 0 : 105}%);
    opacity: ${isOpen ? 1 : 0};
  `}
`;

const Header = styled.header`
  padding: 14px;
  display: flex;
  flex-direction: column;
  background-color: ${color.darkblue};
  color: white;

  > div {
    display: flex;
    align-items: center;

    &:first-child {
      margin-bottom: 8px;
    }

    > p {
      margin-left: 12px;
      font-size: 16px;
    }
  }
`;

const ProfileStatsWrapper = styled.div`
  padding: 14px;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const MainMenu = styled.ul`
  flex: 1;
`;

const MainMenuItem = styled.li``;

const MenuButton = styled.button`
  ${resetButtonStyle}
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  text-align: left;
  border-image: linear-gradient(to right, lightgrey, white) 10;
  transition: 0.12s;
  text-indent: 24px;

  @media (hover: hover) {
    &:hover {
      border-left: 5px solid;
      border-bottom: 1px solid;
    }
  }
`;

const SideMenu = styled.ul`
  flex: 0 1 48px;
  display: flex;
  flex-direction: column;
`;

const SideMenuItem = styled.li`
  ${centerCenter}
  width: 48px;
  height: 48px;
`;

const Drawer: React.FC = () => {
  const [, formDispatch] = useAtom(happeningFormReducerAtom);
  const [, mapDispatch] = useAtom(mapReducerAtom);
  const [profile] = useAtom(profileAtom);
  const [drawerIsOpen, setDrawerIsOpen] = useAtom(drawerAtom);

  function openCreateHappeningForm() {
    setDrawerIsOpen(false);
    formDispatch(toggleFormAction(true));
  }

  return (
    <Wrapper isOpen={drawerIsOpen}>
      <Header>
        <div>
          <ProfilePicture source={profile.profilePic} />
          <Text>{profile.displayName}</Text>
        </div>
        <ProfileStatsWrapper>
          <ProfileStats {...profile.stats} />
        </ProfileStatsWrapper>
      </Header>
      <ContentWrapper>
        <MainMenu>
          <MainMenuItem>
            <MenuButton onClick={openCreateHappeningForm}>
              <Text heading bold>
                ADD HAPPENING
              </Text>
            </MenuButton>
          </MainMenuItem>
        </MainMenu>
        <SideMenu>
          <SideMenuItem>
            <Switch
              ActiveIcon={DarkBulbIcon}
              InactiveIcon={LightBulbIcon}
              label="toggle-light-mode"
              onChange={() => mapDispatch(toggleThemeAction())}
            />
          </SideMenuItem>
        </SideMenu>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Drawer;
