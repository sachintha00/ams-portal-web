import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapsed: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleCollapsedSidebar: (state) => {
      state.collapsed = !state.collapsed;
    },
  },
});

export const { toggleCollapsedSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
