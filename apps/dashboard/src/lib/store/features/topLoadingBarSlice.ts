import { PayloadAction, createSlice } from "common/redux";

export type TopLoadingBarState = {
  progress: number;
};

const initialState: TopLoadingBarState = {
  progress: 0,
};

export const topLoadingBarSlice = createSlice({
  name: "topLoadingBar",
  initialState,
  reducers: {
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
  },
});

export const { setProgress } = topLoadingBarSlice.actions;

export default topLoadingBarSlice.reducer;
