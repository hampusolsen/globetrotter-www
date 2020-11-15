import React from "react";
import { useProfile } from "../api/api.hooks";
import { ChildrenOnlyProps } from "../resources/types/commonProps";
import LoadingOverlay from "./Loader";

const RouteGuard: React.FC<ChildrenOnlyProps> = ({ children }) => {
  const { error, isLoading } = useProfile();

  if (isLoading) {
    // eslint-disable-next-line no-console
    console.log("isLoading", isLoading);
    return <LoadingOverlay />;
  }

  if (error) {
    // eslint-disable-next-line no-console
    console.error("error loading profile");
  }

  return <>{children}</>;
};

export default RouteGuard;
