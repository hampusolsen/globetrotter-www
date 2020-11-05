import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeView from "../components/views/Home/Home.view";
import NotFoundView from "../components/views/NotFound/NotFound.view";
import WelcomeView from "../components/views/Welcome/Welcome.view";
import RoutePaths from "../config/router.config";
import RouteGuard from "./RouteGuard";

const Router = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={RoutePaths.ROOT} element={<WelcomeView />} />
      <RouteGuard>
        <Route path={RoutePaths.MY} element={<HomeView />} />
      </RouteGuard>
      <Route path={RoutePaths.WILDCARD} element={<NotFoundView />} />
    </Routes>
  );
};

export default Router;
