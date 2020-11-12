import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../components/modules/Navigation/Navigation.module";
import MapView from "../components/views/Map/Map.view";
import NotFoundView from "../components/views/NotFound/NotFound.view";
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
          <Route path={RoutePaths.MY} element={<ProfileView />} />
          <Route path={RoutePaths.MAP} element={<MapView />} />
          <Route path={RoutePaths.ADD_TRAVEL} element={<TravelView />} />
        </Routes>
      </RouteGuard>
      <Route path={RoutePaths.WILDCARD} element={<NotFoundView />} />
    </Routes>
  );
};

export default Router;
