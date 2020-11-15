import React from "react";
import { Outlet } from "react-router";
import Fullscreen from "../../common/wrappers/Fullscreen";
import ViewWrapper from "../../common/wrappers/ViewWrapper";
import ProfileHeader from "./sub-components/Header.sub";
import ProfileNavigation from "./sub-components/Navigation.sub";

const ProfileView: React.FC = () => {
  return (
    <Fullscreen overflow>
      <ViewWrapper center>
        <ProfileHeader />
        <ProfileNavigation />
        <Outlet />
      </ViewWrapper>
    </Fullscreen>
  );
};

export default ProfileView;
