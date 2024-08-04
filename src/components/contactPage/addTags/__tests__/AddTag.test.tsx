import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTags from "../AddTags"; // Adjust the import path based on your project structure
import "@testing-library/jest-dom";

describe("AddTags", () => {
  const mockAddTags = jest.fn();

  beforeEach(() => {
    render(<AddTags addTags={mockAddTags} isLoading={false} />);
    mockAddTags.mockClear();
  });

  test("renders textarea and button", () => {
    //Act
    const textarea = screen.getByPlaceholderText("Some tags...");
    const button = screen.getByRole("button", { name: "Add Tags" });

    //Assert
    expect(textarea).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("updates textarea value on user input", () => {
    //Act
    const input = screen.getByPlaceholderText("Some tags...");
    fireEvent.change(input, { target: { value: "tag1 tag2" } });

    //Assert
    expect(input).toHaveValue("tag1 tag2");
  });

  test("submits the tags on button click", async () => {
    //Act
    const input = screen.getByPlaceholderText("Some tags...");
    const button = screen.getByRole("button", { name: "Add Tags" });

    fireEvent.change(input, { target: { value: "tag1 tag2" } });
    fireEvent.click(button);

    //Assert
    expect(mockAddTags).toHaveBeenCalledWith(["tag1", "tag2"]);
    expect(input).toHaveValue("");
  });

  it("does not submit tags when input is empty", () => {
    //Act
    const button = screen.getByRole("button", { name: "Add Tags" });
    userEvent.click(button);

    //Assert
    expect(mockAddTags).not.toHaveBeenCalled();
  });
});
