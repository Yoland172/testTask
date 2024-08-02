import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IContactInfoAPI, ResourcesItem } from "../../lib/types/types";

export const contactInfoApi = createApi({
  reducerPath: "contactInfoApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1/",
    headers: {
      Authorization: `Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn`,
    },
  }),
  endpoints: (build) => ({
    getContactInfo: build.query<IContactInfoAPI, string>({
      query: (id) => `contact/${id}`
    }),
  }),
});

export const { useGetContactInfoQuery } = contactInfoApi;
