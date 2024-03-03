import { combineReducers } from "@reduxjs/toolkit";
import topLoadingBarReducer from "./features/topLoadingBarSlice";

export const rootReducer = combineReducers({
  topLoadingBar: topLoadingBarReducer,
});
