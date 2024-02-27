import { apiSlice } from "../api/api_slice";
import { userLoggedIn, userLoggedOut, userRegistration } from "./auth_slice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (newUserData) => ({
        url: "user_register",
        method: "POST",
        body: newUserData,
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          // dispatch(
          //   userLoggedIn({
          //     accessToken: result.data.access_token,
          //     refreshToken: result.data.refresh_token,
          //     user: result.data.user,
          //   })
          // );
        } catch (error) {
          console.log("error");
        }
      },
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "user_login",
        method: "POST",
        body: { email, password },
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.access_token,
              refreshToken: result.data.refresh_token,
              user: result.data.user,
            })
          );

        } catch (error) {
          console.log("error");
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
