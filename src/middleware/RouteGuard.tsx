import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api.client";
import RoutePaths from "../config/router.config";
import { ChildrenOnlyProps } from "../resources/types/commonProps";
import { globalAtom } from "../store/global.state";
import LoadingOverlay from "./Loader";

const RouteGuard: React.FC<ChildrenOnlyProps> = ({ children }) => {
  const navigate = useNavigate();
  const [, setGlobalState] = useAtom(globalAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function authorizeUser() {
      try {
        const profile = await API.fetchUserProfile();

        if (!profile) {
          navigate(RoutePaths.ROOT);
        } else {
          setGlobalState(profile);
          setLoading(false);
        }
      } catch {
        navigate(RoutePaths.ROOT);
      }
    })();
  }, [setGlobalState, navigate]);

  return (
    <>
      {children}
      {loading && <LoadingOverlay />}
    </>
  );
};

export default RouteGuard;
