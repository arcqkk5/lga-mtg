import {
  User,
  UserData,
  FetchUserAction,
  FetchUserDataAction,
  fetchUser,
  fetchUserData,
} from "./usersActions";
import {
  ShowWindowActionType,
  HideWindowActionType,
  showModalWindow,
  hideModalWindow,
} from "./modalsActions";

export { fetchUser, fetchUserData };
export { showModalWindow, hideModalWindow };
export type { User, UserData, FetchUserDataAction, FetchUserAction };
export type { ShowWindowActionType, HideWindowActionType };
