import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import CreateContact from "../CreateContact";

describe("CreateContact", () => {
  it("renders correctly", () => {
    //Arange
    const mockAddContact = jest.fn();

    //Act
    render(<CreateContact addContact={mockAddContact} isLoading={false} />);

    //Assert
    expect(
      screen.getByPlaceholderText("What's first name?")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("And last name?")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("How about email?")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Contact" })
    ).toBeInTheDocument();
  });

  it("displays loader when isLoading is true", () => {
    //Arange
    const mockAddContact = jest.fn();

    //Act
    render(<CreateContact addContact={mockAddContact} isLoading={true} />);

    //Assert
    expect(screen.getByTestId("loader")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("validates form fields correctly", async () => {
    //Arange
    const mockAddContact = jest.fn();

    //Act
    render(<CreateContact addContact={mockAddContact} />);
    userEvent.click(screen.getByRole("button", { name: "Add Contact" }));

    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });

    const emailInput = screen.getByPlaceholderText("How about email?");
    await waitFor(() => {
      userEvent.type(emailInput, "invalidemail");
      userEvent.tab(); // Triggers validation
    });

    //Assert
    await waitFor(() => {
      expect(screen.getByText("invalid email address")).toBeInTheDocument();
    });
  });

  test("submits valid data", async () => {
    //Arange
    const mockAddContact = jest.fn();

    //Act
    render(<CreateContact addContact={mockAddContact} isLoading={false} />);

    fireEvent.change(screen.getByPlaceholderText("What's first name?"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("And last name?"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("How about email?"), {
      target: { value: "john.doe@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Add Contact" }));

    //Assert
    await waitFor(() =>
      expect(mockAddContact).toHaveBeenCalledWith({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
      })
    );
  });

  //   test("sets manual errors when both name fields are empty", async () => {
  //     //Arange
  //     const mockAddContact = jest.fn();

  //     //Act
  //     render(<CreateContact addContact={mockAddContact} />);
  //     screen.debug();
  //     await userEvent.click(screen.getByRole('button', { name: 'Add Contact' }));
  //     await waitFor(() => {
  //       expect(screen.getAllByText('One name field is required').length).toBe(2);
  //     });
  //   });
});
