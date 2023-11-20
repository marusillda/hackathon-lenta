import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISignInRequest } from "../models/ISignInRequest";
import { ISignInResponse } from "../models/ISignInResponse";

export const signInAPI = createApi({
  reducerPath: "signInAPI",
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
    signIn: build.mutation<ISignInResponse, ISignInRequest>({
      query: (body) => ({
        url: "api/v1/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignInMutation } = signInAPI;
