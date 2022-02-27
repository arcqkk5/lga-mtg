import {
  User,
  FetchUserAction,
  FetchUserDataAction,
  UserData,
} from "../actions";
import { ActionTypes } from "../actions/types";

const initialState = {
  users: [] as User[],
  activeUser: [] as UserData[],
};

export type TypeState = typeof initialState;

export const usersReduser = (
  state = initialState,
  action: FetchUserAction | FetchUserDataAction
): TypeState => {
  switch (action.type) {
    case ActionTypes.fetchUser:
      return {
        ...state,
        users: action.payload,
      };
    case ActionTypes.fetchUserData:
      return {
        ...state,
        activeUser: action.payload,
      };
    default:
      return state;
  }
};
