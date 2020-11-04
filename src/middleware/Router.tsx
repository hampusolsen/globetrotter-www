import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundView from "../components/views/NotFound/NotFound.view";
import WelcomeView from "../components/views/Welcome/Welcome.view";
import RoutePaths from "../config/router.config";

const Router = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={RoutePaths.ROOT} element={<WelcomeView />} />
      <Route path={RoutePaths.WILDCARD} element={<NotFoundView />} />
    </Routes>
  );
};

export default Router;
