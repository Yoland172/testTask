import { render, screen } from "@testing-library/react";
import UserInfo from "../UserInfo"; // Adjust the import path based on your project structure
import "@testing-library/jest-dom";

describe("UserInfo", () => {
  const defaultProps = {
    avatar_url: "http://example.com/avatar.jpg",
    email: "user@example.com",
    firstName: "John",
    lastName: "Doe",
  };

  test("renders correctly with all props", () => {
    //Act
    render(<UserInfo {...defaultProps} />);

    //Assert
    expect(screen.getByAltText("userAvatar")).toHaveAttribute(
      "src",
      defaultProps.avatar_url
    );
    expect(screen.getByText(defaultProps.firstName)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.lastName)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.email)).toBeInTheDocument();
  });
});
