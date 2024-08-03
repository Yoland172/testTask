import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IContactInfoAPI } from "../../lib/types/types";

export const contactInfoApi = createApi({
  reducerPath: "contactInfoApi",
  tagTypes: ["ContactInfo"],
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1/",
    headers: {
      Authorization: `Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn`,
    },
  }),
  endpoints: (build) => ({
    getContactInfo: build.query<IContactInfoAPI, string>({
      query: (id) => `contact/${id}`,
      providesTags: (result) =>
        result?.resources
          ? [
              ...result.resources.map(({ id }) => ({
                type: "ContactInfo" as const,
                id,
              })),
              { type: "ContactInfo", id: "LIST" },
            ]
          : [{ type: "ContactInfo", id: "LIST" }],
    }),
    addTags: build.mutation<void, { tags: string[]; id: string }>({
      query: ({ tags, id }) => ({
        url: `contacts/${id}/tags`,
        method: "PUT",
        body: {
          tags,
        },
      }),
      invalidatesTags: [{ type: "ContactInfo", id: "LIST" }],
    }),
  }),
});

export const { useGetContactInfoQuery, useAddTagsMutation } = contactInfoApi;
