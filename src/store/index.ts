import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./api/contacts";
import { contactInfoApi } from "./api/contactInfo";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [contactInfoApi.reducerPath]: contactInfoApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware()
      .concat(contactsApi.middleware)
      .concat(contactInfoApi.middleware),
});
