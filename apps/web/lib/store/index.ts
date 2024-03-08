import { configureStore } from "@reduxjs/toolkit";
import redux from "redux";
import reduxThunk from "redux-thunk";
import cartReducer from "./features/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { cartReducer },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
