import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Fields,
  IContactAPI,
} from "../../lib/types/types";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1/",
    headers: {
      Authorization: `Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn`,
    },
  }),
  endpoints: (build) => ({
    getContacts: build.query<IContactAPI, void>({
      query: () => `contacts?sort=created:desc`,
    }),
    addContact: build.mutation<void, Fields>({
      query: (fields) => ({
        url: `contact`,
        method: "POST",
        body: {
          record_type: "person",
          privacy: {
            edit: null,
            read: null,
          },
          owner_id: null,
          fields,
        },
      }),
    }),
  }),
});

export const { useGetContactsQuery, useAddContactMutation } = contactsApi;
