import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layout: [],
};

const dragableSurfaceSlice = createSlice({
  name: "dragableSurface",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const exists = state.layout.some(item => item.i === newItem.i);
      if (!exists) {
        state.layout.push(newItem);
      }
    },
    updateLayout: (state, action) => {
      state.layout = action.payload;
    },
    removeItem: (state, action) => {
      state.layout = state.layout.filter(item => item.i !== action.payload);
    },
  },
});

export const { addItem, updateLayout, removeItem } = dragableSurfaceSlice.actions;
export default dragableSurfaceSlice.reducer;
