import { useAtom } from "jotai";
import { QueryResult, useQuery } from "react-query";
import { useNavigate } from "react-router";
import RoutePaths from "../config/router.config";
import profileState, { initialProfileState } from "../store/profile.state";
import API from "./api.client";
import { UserData } from "./api.types";

export function useProfile(): QueryResult<UserData, Error> {
  const [, setProfile] = useAtom(profileState);

  return useQuery("profile", () => API.fetchUserProfile(), {
    retry: false,
    refetchOnMount: false,
    onSuccess: (profile) => {
      setProfile(profile);
    }
  });
}

export function useLogout(): QueryResult<boolean, Error> {
  const [, setProfile] = useAtom(profileState);
  const navigate = useNavigate();

  return useQuery("profile", () => API.logoutUser(), {
    onSuccess: () => {
      setProfile(initialProfileState);
      navigate(RoutePaths.ROOT);
    }
  });
}
