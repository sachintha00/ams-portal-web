import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

if (typeof window !== "undefined") {
  initialState.user = JSON.parse(localStorage.getItem("user")) || null;
  initialState.accessToken = localStorage.getItem("accessToken") || null;
  initialState.refreshToken = localStorage.getItem("refreshToken") || null;
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
  },
});

export const { userLoggedIn } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentAccessToken = (state) => state.auth.accessToken;
export const selectCurrentRefreshToken = (state) => state.auth.refreshToken;
