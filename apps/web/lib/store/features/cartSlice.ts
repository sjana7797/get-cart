// cart slice

import { createSlice } from "@reduxjs/toolkit";

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
