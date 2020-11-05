import { useAtom } from "jotai";
import {
  MutationResultPair,
  QueryResult,
  useMutation,
  useQuery
} from "react-query";
import { useNavigate } from "react-router";
import RoutePaths from "../config/router.config";
import profileState from "../store/profile.state";
import API from "./api.client";
import { ErrorResponse, LocalCredentials, UserData } from "./api.types";

/**
 * Testing purposes only.
 */
export function useRegisterUser(): MutationResultPair<
  boolean,
  ErrorResponse,
  LocalCredentials,
  unknown
> {
  return useMutation(async (credentials) =>
    API.registerLocally(credentials).then((response) => response.status === 204)
  );
}

export function useProfile(id?: string): QueryResult<UserData, Error> {
  const [, setProfile] = useAtom(profileState);
  const navigate = useNavigate();

  return useQuery("profile", () => API.fetchUserProfile(id), {
    retry: false,
    refetchOnMount: false,
    onSuccess: (profile) => {
      setProfile(profile);
    },
    onError: () => {
      navigate(RoutePaths.ROOT);
    }
  });
}
