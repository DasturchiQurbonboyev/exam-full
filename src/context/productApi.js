import { api } from './api'

export const productApi = api.injectEndpoints({
    endpoints: (build) => ({

        // Get request
        getProduct: build.query({
            query: (params) => ({
                url: '/product',
                params
            }),
            providesTags: ["Product"]
        }),



        // Post request
        createProduct: build.mutation({
            query: (body) => ({
                url: "/product",
                method: "POST",
                body
            }),
            invalidatesTags: ["Product"]
        }),

        // Delete request
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Product"]
        }),

        // Updatet request
        updateProduct: build.mutation({
            query: ({ body, id }) => ({
                url: `/product/${id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["Product"]
        })
    }),
})

export const {
    useGetProductQuery,
    useCreateProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation,
} = productApi