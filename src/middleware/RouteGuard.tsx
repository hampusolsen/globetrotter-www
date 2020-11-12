import React from "react";
import { useProfile } from "../api/api.hooks";
import { ChildrenOnlyProps } from "../resources/types/commonProps";

const RouteGuard: React.FC<ChildrenOnlyProps> = ({ children }) => {
  const { data, error, isLoading } = useProfile();

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
    console.error("error loading profile");
  }

  return <>{children}</>;
};

export default RouteGuard;
