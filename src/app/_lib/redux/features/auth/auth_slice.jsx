import dynamic from "next/dynamic";
import { createSlice } from "@reduxjs/toolkit";

// Ensure that `localStorage` is only accessed in the browser
const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

if (typeof window !== "undefined") {
  console.log("Initializing state from localStorage");
  initialState.user = JSON.parse(localStorage.getItem("user")) || null;
  initialState.accessToken = localStorage.getItem("accessToken") || null;
  initialState.refreshToken = localStorage.getItem("refreshToken") || null;
  console.log("Initial state:", initialState);
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;

      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", action.payload.accessToken);
        localStorage.setItem("refreshToken", action.payload.refreshToken);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      }
    },
    userLoggedOut: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;

      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
      }
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentAccessToken = (state) => state.auth.accessToken;
export const selectCurrentRefreshToken = (state) => state.auth.refreshToken;
