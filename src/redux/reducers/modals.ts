import { ShowWindowActionType, HideWindowActionType } from "../actions";
import { ActionTypes } from "../actions/types";

const initialState = {
  isShow: false as boolean,
};

export type TypeStateModals = typeof initialState;

export const modalsReduser = (
  state = initialState,
  action: ShowWindowActionType | HideWindowActionType
): TypeStateModals => {
  switch (action.type) {
    case ActionTypes.showWindow:
      return {
        ...state,
        isShow: action.payload,
      };
    case ActionTypes.hideWindow:
      return {
        ...state,
        isShow: action.payload,
      };
    default:
      return state;
  }
};
