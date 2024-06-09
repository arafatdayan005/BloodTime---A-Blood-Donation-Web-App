import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://blood-donation-server-seven.vercel.app",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", token);
    }
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["flower", "sales", "coupons"],
  endpoints: () => ({}),
});
