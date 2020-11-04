import { MutationResultPair, useMutation } from "react-query";
import API from "./api.client";
import { ErrorResponse, LocalCredentials } from "./api.types";

/**
 * Testing purposes only.
 */
export default function useRegisterUser(): MutationResultPair<
  boolean,
  ErrorResponse,
  LocalCredentials,
  unknown
> {
  return useMutation(async (credentials) =>
    API.registerLocally(credentials).then((response) => response.status === 204)
  );
}
