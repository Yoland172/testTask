import { render, screen } from "@testing-library/react";
import UserTags from "../UserTags";
import "@testing-library/jest-dom";

describe("UserTags", () => {
  test("renders the tags correctly when tags are provided", () => {
    const tags = [
      { id: "1", tag: "Developer" },
      { id: "2", tag: "React" },
    ];

    //Act
    render(<UserTags tags={tags} />);

    //Assert
    expect(screen.getByText("Tags")).toBeInTheDocument();
    expect(screen.getByText("Developer")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getAllByText(/Developer|React/).length).toBe(2);
  });

  test("does not render any tags when the tags array is empty", () => {
    //Act
    render(<UserTags tags={[]} />);

    //Assert
    expect(screen.queryByText("Developer")).toBeNull();
    expect(screen.queryByText("React")).toBeNull();
    expect(screen.getByText("Tags")).toBeInTheDocument();
  });

  test("does not render any tags when the tags prop is undefined", () => {
    //Act
    render(<UserTags />);

    //Assert
    expect(screen.queryByText("Developer")).toBeNull();
    expect(screen.queryByText("React")).toBeNull();
    expect(screen.getByText("Tags")).toBeInTheDocument();
  });
});
