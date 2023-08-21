import { combineReducers } from "@reduxjs/toolkit";
import initialReducer from "./features/initial";

const rootReducer = combineReducers({
  initial: initialReducer,
});

export default rootReducer