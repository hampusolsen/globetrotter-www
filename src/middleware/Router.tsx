import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../components/modules/Navigation/Navigation.module";
import MapView from "../components/views/Map/Map.view";
import NotFoundView from "../components/views/NotFound/NotFound.view";
import ProfileContactsOutlet from "../components/views/Profile/outlets/ProfileContacts.outlet";
import ProfileEditOutlet from "../components/views/Profile/outlets/ProfileEdit.outlet";
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
            <Route path={RoutePaths.ROOT} element={<ProfileContactsOutlet />} />
            <Route path={RoutePaths.EDIT} element={<ProfileEditOutlet />} />
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
