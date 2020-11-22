import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api.client";
import RoutePaths from "../config/router.config";
import { ChildrenOnlyProps } from "../resources/types/commonProps";
import profileState from "../store/profile.state";
import LoadingOverlay from "./Loader";

const RouteGuard: React.FC<ChildrenOnlyProps> = ({ children }) => {
  const navigate = useNavigate();
  const [, setProfile] = useAtom(profileState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function authorizeUser() {
      const data = await API.fetchUserProfile();

      if (!data) {
        navigate(RoutePaths.ROOT);
      } else {
        setProfile(data);
        setLoading(false);
      }
    })();
  }, [setProfile, navigate]);

  return (
    <>
      {children}
      {loading && <LoadingOverlay />}
    </>
  );
};

export default RouteGuard;
