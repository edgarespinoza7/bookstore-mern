import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getBaseURL } from '../../../utils/baseURL'

const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/orders`,
    credentials: 'include',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Orders'],
  endpoints: (builder) => ({
    // Create a new order
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: `/`,
        method: 'POST',
        body: newOrder,
        credentials: 'include',
      }),
      invalidatesTags: ['Orders'],
    }),

    getOrdersByEmail: builder.query({
      query: (email) => (
        {
          url: `/email/${email}`,
          method: 'GET',
          credentials: 'include',
        }
      ),
      transformResponse: (response) => response.orders || [], 
      providesTags: ['Orders'],
    }),

    // fetchOrderById: builder.query({
    //   query: (id) => `/${id}`,
    //   providesTags: (result, error, id) => [{ type: 'Orders', id }],
    // }),

    // updateOrderStatus: builder.mutation({
    //   query: ({ id, ...rest }) => ({
    //     url: `/edit/${id}`,
    //     method: 'PUT',
    //     body: rest,
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }),
    //   invalidatesTags: ['Orders'],
    // }),

    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Orders'],
    }),
  }),
})

export const {
  useCreateOrderMutation,
  useGetOrdersByEmailQuery,
  useFetchAllOrdersQuery,
  useFetchOrderByIdQuery,
  useUpdateOrderStatusMutation,
  useDeleteOrderMutation,
} = ordersApi

export default ordersApi;