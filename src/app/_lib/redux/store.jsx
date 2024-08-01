"use client";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/api_slice";
import authReducer from "./features/auth/auth_slice";
import dragableSurfaceReducer from "./features/dashboard/dragable_surface_slice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    dragableSurface: dragableSurfaceReducer,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

