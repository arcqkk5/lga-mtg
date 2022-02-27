import { ActionTypes } from "./types";

export interface ShowWindowActionType {
  type: ActionTypes.showWindow;
  payload: boolean;
}

export interface HideWindowActionType {
  type: ActionTypes.hideWindow;
  payload: boolean;
}

export const showModalWindow = (): ShowWindowActionType => {
  return {
    type: ActionTypes.showWindow,
    payload: true,
  };
};

export const hideModalWindow = (): HideWindowActionType => {
  return {
    type: ActionTypes.hideWindow,
    payload: false,
  };
};
