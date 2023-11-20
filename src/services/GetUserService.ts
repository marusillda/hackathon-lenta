import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getUserAPI = createApi({
  reducerPath: "getUserAPI",
  baseQuery: fetchBaseQuery({
    // TODO: считывать из .env  файла
    baseUrl: "http://localhost:8000",
    prepareHeaders: (headers: Headers) => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: "api/v1/info-header/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserQuery } = getUserAPI;
