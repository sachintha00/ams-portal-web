import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layout: [],
};

const dragableSurfaceSlice = createSlice({
  name: "dragableSurface",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      state.layout.push(action.payload);
    },
    updateLayout: (state, action) => {
      state.layout = action.payload;
    },
  },
});

export const { addItem, updateLayout } = dragableSurfaceSlice.actions;
export default dragableSurfaceSlice.reducer;
