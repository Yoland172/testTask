// import { render, waitFor, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { contactsApi } from '../../../store/api/contacts';
// import { toast } from 'react-toastify';
// import ContactListContainer from '../ContactListContainer';


// // Mock the entire contacts API module
// jest.mock("../../../store/api/contacts", () => ({
//   useGetContactsQuery: () => ({
//     data: { resources: [{ id: '1', name: 'John Doe' }] },
//     isError: false
//   }),
//   useAddContactMutation: () => {
//     return [jest.fn(), { isLoading: false, isError: false }];
//   },
//   useDeleteContactMutation: () => {
//     return [jest.fn(), { isLoading: false, isError: false }];
//   }
// }));

// jest.mock('react-toastify', () => ({
//   toast: {
//     error: jest.fn(),
//   }
// }));

// const store = configureStore({
//   reducer: {
//     // Assuming contactsApi is your API slice reducer
//     [contactsApi.reducerPath]: contactsApi.reducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(contactsApi.middleware),
// });

// describe('ContactListContainer', () => {
//   it('renders and handles data fetching correctly', async () => {
//     render(
//       <Provider store={store}>
//         <ContactListContainer />
//       </Provider>
//     );

//     await waitFor(() => {
//       expect(screen.getByText('John Doe')).toBeInTheDocument();
//     });
//   });

//   it('displays an error toast when there is a fetch error', () => {
//     jest.mock('../../store/api/contacts', () => ({
//       useGetContactsQuery: () => ({
//         isError: true
//       })
//     }));

//     render(
//       <Provider store={store}>
//         <ContactListContainer />
//       </Provider>
//     );

//     expect(toast.error).toHaveBeenCalled();
//   });
// });
