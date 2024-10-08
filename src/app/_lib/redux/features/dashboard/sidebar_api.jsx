import { apiSlice } from "../api/api_slice";

export const dashboardSidebarMenuApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardSidebarMenuItems: builder.query({
      query: () => ({
        url: "get_menu_structure",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetDashboardSidebarMenuItemsQuery } = dashboardSidebarMenuApi;
