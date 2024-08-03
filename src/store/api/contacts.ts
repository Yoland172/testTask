import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Fields, IContactAPI } from "../../lib/types/types";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  tagTypes: ["Contacts"],
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
      providesTags: (result) =>
        result?.resources
          ? [
              ...result.resources.map(({ id }) => ({
                type: "Contacts" as const,
                id,
              })),
              { type: "Contacts", id: "LIST" },
            ]
          : [{ type: "Contacts", id: "LIST" }],
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
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
    deleteContact: build.mutation<void, string>({
      query: (id) => ({
        url: `contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
