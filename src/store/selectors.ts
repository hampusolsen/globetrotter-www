import { useSelector } from "react-redux";
import { RootState } from ".";
import { IUserState } from "./user/user.types";

export const useProfile = (): IUserState => {
  const user = useSelector<RootState>((state) => state.user.data);

  return user as IUserState;
};

export const useAuthenticationStatus = (): boolean => {
  const isAuthenticated = useSelector<RootState>(
    (state) => state.user.isAuthenticated
  );

  return isAuthenticated as boolean;
};
