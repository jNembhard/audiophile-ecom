import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

const menuSlice = createSlice({
  name: "menu",
  initialState: { openMenu: false },
  reducers: {
    toggleNav: (state) => {
      state.openMenu != state.openMenu;
    },
    closeNav: (state) => {
      state.openMenu = false;
    },
  },
});

export const isMenuOpen = (state: RootState): boolean => state.menu.openMenu;
export const { toggleNav, closeNav } = menuSlice.actions;
export default menuSlice.reducer;
