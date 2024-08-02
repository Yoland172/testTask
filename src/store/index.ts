import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./api/contacts";

export const store = configureStore({
    reducer:{
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(contactsApi.middleware)
})