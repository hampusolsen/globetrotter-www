import React from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../api/api.hooks";
import RoutePaths from "../config/router.config";
import { ChildrenOnlyProps } from "../resources/types/commonProps";
import LoadingOverlay from "./Loader";

const RouteGuard: React.FC<ChildrenOnlyProps> = ({ children }) => {
  const { isError, isLoading } = useProfile();
  const navigate = useNavigate();

  if (isError) {
    // eslint-disable-next-line no-console
    console.error("error loading profile");
    navigate(RoutePaths.ROOT);
  }

  return (
    <>
      {children}
      {isLoading && <LoadingOverlay />}
    </>
  );
};

export default RouteGuard;
