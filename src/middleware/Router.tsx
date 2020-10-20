import React from "react";
import { useRoutes } from "react-router-dom";
import routesConfig from "../config/routes.config";

const Router: React.FC = () => {
  const router = useRoutes(routesConfig);
  return router;
};

export default Router;
