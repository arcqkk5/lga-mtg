import { combineReducers } from "redux";
import { usersReduser, TypeState } from "./users";
import { modalsReduser, TypeStateModals } from "./modals";

export interface StoreState {
  stateUsers: TypeState;
  stateModal: TypeStateModals;
}

export const redusers = combineReducers<StoreState>({
  stateUsers: usersReduser,
  stateModal: modalsReduser,
});
