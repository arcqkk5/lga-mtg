import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { redusers } from "../reducers/redusers";

const store = createStore(redusers, applyMiddleware(thunk));

export default store;
