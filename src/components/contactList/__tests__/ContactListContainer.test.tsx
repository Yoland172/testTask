import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "../../../store/api/contacts";
import { toast } from "react-toastify";
import ContactListContainer from "../ContactListContainer";

// Mock the entire contacts API module
// Mock the entire contacts API module
jest.mock("../../../store/api/contacts", () => {
  // Override specific API hooks while keeping the rest of the module intact
  return {
    useGetContactsQuery: () => ({
      data: { resources: [{ id: "1", name: "John Doe" }] },
      isError: false,
      isLoading: false,
      isSuccess: true,
    }),
    useAddContactMutation: () => [
      jest.fn().mockResolvedValue({ data: { id: "1", name: "John Doe" } }),
      { isLoading: false, isError: false },
    ],
    useDeleteContactMutation: () => [
      jest.fn().mockResolvedValue({ data: { id: "1" } }),
      { isLoading: false, isError: false },
    ],
  };
});

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
  },
}));

// Proper Redux Store Setup
// const store = configureStore({
//   reducer: {},
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
// });

describe("ContactListContainer", () => {
  it("renders and handles data fetching correctly", async () => {
    render(
        <ContactListContainer />
    );

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });
  });

  it("displays an error toast when there is a fetch error", async () => {
    jest.mock("../../../store/api/contacts", () => ({
      useGetContactsQuery: () => ({
        isError: true,
      }),
    }));

    render(
        <ContactListContainer />
    );

    expect(toast.error).toHaveBeenCalled();
  });
});
