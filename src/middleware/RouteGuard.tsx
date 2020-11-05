import React, { ReactNode } from "react";
import { useNavigate } from "react-router";
import { useProfile } from "../api/api.hooks";
import RoutePaths from "../config/router.config";

interface Props {
  children: ReactNode;
}

const RouteGuard: React.FC<Props> = ({ children }) => {
  const { data, error, isLoading } = useProfile();
  const navigate = useNavigate();

  if (isLoading) {
    // eslint-disable-next-line no-console
    console.log("isLoading", isLoading);
  }

  if (data) {
    // eslint-disable-next-line no-console
    console.log("data", data);
  }

  if (error) {
    // eslint-disable-next-line no-console
    console.error("error", error);
    navigate(RoutePaths.ROOT);
  }

  return <>{children}</>;
};

export default RouteGuard;
