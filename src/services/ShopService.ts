import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IServerShop} from "../models/IServerShop";
import {IServerResponse} from "../models/IServerResponse";

export const shopAPI = createApi({
  reducerPath: 'shopAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000'
  }),
  endpoints: (build) => ({
    getShops: build.query<IServerResponse<IServerShop[]>, string>({
      query: () => ({
        url: '/api/v1/shops/'
      })
    })
  })
})

export const {
  useGetShopsQuery
} = shopAPI;
