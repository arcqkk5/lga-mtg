import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface User {
  id: number;
  name: string;
}

export interface UserData {
  id: number;
  email: string;
  phone: string;
  website: string;
}

export interface FetchUserAction {
  type: ActionTypes.fetchUser;
  payload: User[];
}

export interface FetchUserDataAction {
  type: ActionTypes.fetchUserData;
  payload: UserData[];
}

const url: string = `https://jsonplaceholder.typicode.com/users`;

export const fetchUser = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<User[]>(url);

    dispatch<FetchUserAction>({
      type: ActionTypes.fetchUser,
      payload: response.data,
    });
  };
};

export const fetchUserData = (id: number) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<UserData>(url + "/" + id);

    let userData = [];
    for (let value in response.data) {
      if (value === "email" || value === "phone" || value === "website") {
        userData.push(response.data[value]);
      }
    }

    dispatch({
      type: ActionTypes.fetchUserData,
      payload: userData,
    });
  };
};
