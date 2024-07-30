import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react' ;

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
    reducerPath: "adminApi",
    tagTypes: ["User", "Products","Customers", "Transactions","Geography","Sales", "Admins", "Performance", "Dashboard"],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) => `/api/v1/dashboard/user/${id}`,
            providesTags: ["User"],
        }),
        getProducts : builder.query({
            query: ()=>`/api/v1/dashboard/products`,
            providesTags: ["Products"],
        }),
        getCustomers : builder.query({
            query: ()=>`/api/v1/dashboard/customers`,
            providesTags: ["Customers"],
            
        }),
        getTransactions : builder.query({
            query: ({page,pageSize,sort,search})=>({
                url: "/api/v1/dashboard/transactions",
                method: "GET" ,
                params : {page,pageSize,sort,search},
            }),
            providesTags: ["Transactions"],   
        }),
        getGeography : builder.query({
            query: ()=>"/api/v1/dashboard/geography", 
            providesTags: ["Geography"],   
        }),
        getSlaes : builder.query({
            query: ()=>"/api/v1/dashboard/sales", 
            providesTags: ["Slaes"],   
        }),
      getAdmins : builder.query({
            query : () => "/api/v1/dashboard/admins",
            providesTags : ["Admins"],
      }),
        getPerformance : builder.query({
            query : (id) =>`/api/v1/dashboard/performance/${id}`,
            providesTags: ["Performance"],
        }),
        getDashboard : builder.query({
            query : (id) =>`/api/v1/dashboard/dashboard`,
            providesTags: ["Dashboard"],
        }),
    }),
});

export const {  useGetUserQuery,
                useGetProductsQuery, 
                useGetCustomersQuery, 
                useGetTransactionsQuery,
                useGetGeographyQuery,
                useGetSlaesQuery,
                useGetAdminsQuery,
                useGetPerformanceQuery,
                useGetDashboardQuery}= api ;