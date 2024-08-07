import { apiSlice } from '../api/api_slice';

export const layoutApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLayout: builder.query({
            query: () => '/draggable_layout',
        }),
        addOrUpdate: builder.mutation({
            query: (updatedLayout) => ({
                url: '/draggable_layout/add_or_update_widget',
                method: 'POST',
                body: updatedLayout,
            }),
        }),
        removeItemApi: builder.mutation({
            query: (itemId) => ({
                url: `/draggable_layout/remove/${itemId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetLayoutQuery, useAddOrUpdateMutation, useRemoveItemApiMutation } = layoutApiSlice;
