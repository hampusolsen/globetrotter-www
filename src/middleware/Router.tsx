import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../components/modules/Navigation/Navigation.module";
import MapView from "../components/views/Map/Map.view";
import NotFoundView from "../components/views/NotFound/NotFound.view";
import Contacts from "../components/views/Profile/outlets/Contacts.outlet";
import EditProfile from "../components/views/Profile/outlets/EditProfile.outlet";
import Followers from "../components/views/Profile/outlets/Followers.outlet";
import Following from "../components/views/Profile/outlets/Following.outlet";
import ProfileView from "../components/views/Profile/Profile.view";
import TravelView from "../components/views/Travel/Travel.view";
import WelcomeView from "../components/views/Welcome/Welcome.view";
import RoutePaths from "../config/router.config";
import RouteGuard from "./RouteGuard";

const Router = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={RoutePaths.ROOT} element={<WelcomeView />} />
      <RouteGuard>
        <Navigation />
        <Routes>
          <Route path={RoutePaths.MY} element={<ProfileView />}>
            <Route path={RoutePaths.CONTACTS} element={<Contacts />}>
              <Route path={RoutePaths.FOLLOWERS} element={<Followers />} />
              <Route path={RoutePaths.FOLLOWING} element={<Following />} />
            </Route>
            <Route
              path={`profile/${RoutePaths.EDIT}`}
              element={<EditProfile />}
            />
          </Route>
          <Route path={RoutePaths.MAP} element={<MapView />} />
          <Route path={RoutePaths.ADD} element={<TravelView />} />
        </Routes>
      </RouteGuard>
      <Route path={RoutePaths.WILDCARD} element={<NotFoundView />} />
    </Routes>
  );
};

export default Router;
