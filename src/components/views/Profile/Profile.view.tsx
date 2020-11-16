import React from "react";
import { Navigate, Outlet } from "react-router";
import RoutePaths from "../../../config/router.config";
import { useTrailingSlug } from "../../../resources/util/hooks";
import Fullscreen from "../../common/wrappers/Fullscreen";
import ProfileHeader from "./sub-components/Header.sub";
import ProfileNavigation from "./sub-components/Navigation.sub";

const validSlugs = [
  RoutePaths.FOLLOWERS,
  RoutePaths.FOLLOWING,
  RoutePaths.EDIT
];

const ProfileView: React.FC = () => {
  const slug = useTrailingSlug();

  if (!validSlugs.some((s) => s === slug)) {
    return <Navigate to={`${RoutePaths.CONTACTS}/${RoutePaths.FOLLOWERS}`} />;
  }

  return (
    <Fullscreen overFlow>
      <ProfileHeader />
      <ProfileNavigation />
      <Outlet />
    </Fullscreen>
  );
};

export default ProfileView;
