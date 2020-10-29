import React, {
  Dispatch,
  ReactElement,
  ReactNode,
  useEffect,
  useReducer
} from "react";
import API from "../api/api.client";

/**
 * Action typings and declarations
 */

export enum UserActions {
  FULFILLED = "FULFILLED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
  IDLE = "IDLE"
}

type ActionType = {
  type: Partial<UserActions>;
  payload?: string | UserDetails;
};

/**
 * State typings and declaration
 */

type UserState = {
  status: Partial<UserActions>;
  error: string;
  details: UserDetails;
};

type UserDetails = {
  username: string;
};

const initialUserState: UserState = {
  status: UserActions.IDLE,
  error: "",
  details: {
    username: ""
  }
};

/**
 * Reducer
 * @param state IUserState
 * @param action ActionType
 */
export function userReducer(
  state = initialUserState,
  action: ActionType
): UserState {
  switch (action.type) {
    case UserActions.PENDING:
      return { ...state, status: UserActions.PENDING };
    case UserActions.FULFILLED:
      return {
        ...state,
        status: UserActions.FULFILLED,
        details: action.payload as UserDetails
      };
    case UserActions.REJECTED:
      return {
        ...state,
        status: UserActions.REJECTED,
        error: action.payload as string
      };
    default:
      return state;
  }
}

// Context
export const UserContext = React.createContext<
  (UserState | Dispatch<ActionType>)[]
>([]);

// Custom useContext hook
export function useProfile(): (UserState | Dispatch<ActionType>)[] {
  return React.useContext(UserContext);
}

// Context provider HOC and typing
type Props = {
  children: ReactNode;
};

export default function UserProvider({ children }: Props): ReactElement {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);

  useEffect(() => {
    userDispatch({ type: UserActions.PENDING });
    API.getCurrentUser()
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
        userDispatch({
          type: UserActions.FULFILLED,
          payload: { username: response.data.username }
        });
      })
      .catch(({ message }) => {
        userDispatch({ type: UserActions.REJECTED, payload: message });
      });
  }, [userDispatch]);

  return (
    <UserContext.Provider value={[userState, userDispatch]}>
      {children}
    </UserContext.Provider>
  );
}
