import { useDispatch, useSelector, useStore } from "common/react-redux";
import type { TypedUseSelectorHook } from "common/react-redux";
import type { RootState, AppDispatch, AppStore } from "./index";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
