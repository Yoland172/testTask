import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import ContactItem from "../ContactItem";
import { MemoryRouter } from "react-router-dom";

describe("InputField", () => {
  const mockDeleteContact = jest.fn();
  const baseProps = {
    id: "123",
    avatar_url: "https://example.com/avatar.jpg",
    email: "user@example.com",
    firstName: "John",
    lastName: "Doe",
    tags: [{ id: "1", tag: "Friend" }],
    deleteContact: mockDeleteContact,
    isLoading: false,
  };
  test("renders without crashing", () => {
    //Act
    render(
      <MemoryRouter>
        <ContactItem {...baseProps} />
      </MemoryRouter>
    );

    //Assert
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
    expect(screen.getByText("user@example.com")).toBeInTheDocument();
    expect(screen.getByAltText("user avatar")).toHaveAttribute(
      "src",
      "https://example.com/avatar.jpg"
    );
    expect(screen.getByText("Friend")).toBeInTheDocument();
  });

  test("handles the delete button click", () => {
    //Act
    render(
      <MemoryRouter>
        <ContactItem {...baseProps} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole("button"));

    //Assert
    expect(mockDeleteContact).toHaveBeenCalled();
  });

  test("does not render firstName and lastName when not provided", () => {
    //Arange
    const props = {
      ...baseProps,
      firstName: undefined,
      lastName: undefined,
    };

    //Act
    render(
      <MemoryRouter>
        <ContactItem {...props} />
      </MemoryRouter>
    );

    //Assert
    expect(screen.queryByText("John")).toBeNull();
    expect(screen.queryByText("Doe")).toBeNull();
  });

  test("displays loading state on delete button if isLoading is true", () => {
    //Arange
    const props = {
      ...baseProps,
      isLoading: true,
    };

    //Act
    render(
      <MemoryRouter>
        <ContactItem {...props} />
      </MemoryRouter>
    );

    //Assert
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("renders no tags if tags array is empty", () => {
    //Arange
    const props = {
      ...baseProps,
      tags: [],
    };

    //Act
    render(
      <MemoryRouter>
        <ContactItem {...props} />
      </MemoryRouter>
    );

    //Assert
    expect(screen.queryByText("Friend")).toBeNull();
  });
});
