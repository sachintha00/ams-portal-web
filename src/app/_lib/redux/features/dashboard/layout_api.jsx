// layout_api.js
import { apiSlice } from '../api/api_slice';

export const layoutApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLayout: builder.query({
            query: () => '/layout',
        }),
        addOrUpdate: builder.mutation({
            query: (updatedLayout) => ({
                url: '/draggable_layout/add_or_update_widget',
                method: 'POST',
                body: updatedLayout,
            }),
        }),
        removeItem: builder.mutation({
            query: (itemId) => ({
                url: `/layout/${itemId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetLayoutQuery, useAddOrUpdateMutation, useRemoveItemMutation } = layoutApiSlice;
