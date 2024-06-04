import { baseApi } from "./../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/api/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    registration: builder.mutation({
      query: (userInfo) => ({
        url: "/api/register",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation } = authApi;
