import { createSlice } from "@reduxjs/toolkit";

const safeParseJSON = (item) => {
  try {
    return JSON.parse(item);
  } catch (error) {
    console.error("Error parsing JSON", error);
    return null;
  }
};

const initialState = {
  user: null,
  accessToken: null,
};

if (typeof window !== "undefined") {
  initialState.user = safeParseJSON(localStorage.getItem("user")) || null;
  initialState.accessToken = localStorage.getItem("accessToken") || null;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;

      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", action.payload.accessToken);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      }
    },
  },
});

export const { userLoggedIn } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentAccessToken = (state) => state.auth.accessToken;
