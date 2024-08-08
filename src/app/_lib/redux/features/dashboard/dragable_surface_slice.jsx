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
      const exists = state.layout.find(item => item.widget_id === newItem.widget_id);

      if (!exists || exists === undefined) {
        state.layout.push(newItem);
      }
    },
    updateLayout: (state, action) => {
      state.layout = action.payload;
    },
    removeItem: (state, action) => {
      state.layout = state.layout.filter(item => item.widget_id !== action.payload);
    },
  },
});

export const { addItem, updateLayout, removeItem } = dragableSurfaceSlice.actions;
export default dragableSurfaceSlice.reducer;
