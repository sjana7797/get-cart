// cart slice

import { createSlice } from "common/redux";

const initialState = {
  isCartSideBarOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartSidebar: (state) => {
      state.isCartSideBarOpen = !state.isCartSideBarOpen;
    },
  },
});

export const { toggleCartSidebar } = cartSlice.actions;

export default cartSlice.reducer;
