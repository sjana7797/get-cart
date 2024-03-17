import { combineReducers } from "common/redux";
import topLoadingBarReducer from "./features/topLoadingBarSlice";

export const rootReducer = combineReducers({
  topLoadingBar: topLoadingBarReducer,
});
