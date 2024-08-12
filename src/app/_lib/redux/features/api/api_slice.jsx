import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut } from "../auth/auth_slice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://213.199.44.42:8000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 401) {
    console.log(`sending refresh token`);

    const refreshResult = await baseQuery({
      url: "/refresh",
      method: "POST",
      body: { refreshToken: api.getState().auth.refreshToken },
    }, api, extraOptions);

    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      api.dispatch(userLoggedIn({ ...refreshResult.data, user }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(userLoggedOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
