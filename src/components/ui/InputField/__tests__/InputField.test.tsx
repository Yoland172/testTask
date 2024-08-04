import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import InputField from "../InputField";

describe("InputField", () => {
  test("renders without crashing", () => {
    //Arange
    const mockRegisterReq = {
      name: "input",
      onChange: jest.fn(),
      onBlur: jest.fn(),
      ref: jest.fn(),
    };
    const type = "text";
    const error = {
      type: "manual",
      ref: { name: "input" },
    };

    //Act
    render(
      <InputField
        registerReq={mockRegisterReq}
        type={type}
        error={error}
        placeholder="testInput"
      />
    );
    const input = screen.getByPlaceholderText("testInput");
    console.log(input);

    //Assert
    expect(input).toBeInTheDocument();
  });

  test("should show validation error message ", () => {
 //Arange
 const mockRegisterReq = {
    name: "input",
    onChange: jest.fn(),
    onBlur: jest.fn(),
    ref: jest.fn(),
  };
  const type = "text";
  const error = {
    message:"error",
    type: "manual",
    ref: { name: "input" },
  };

  //Act
  render(
    <InputField
      registerReq={mockRegisterReq}
      type={type}
      error={error}
      placeholder="testInput"
    />
  );
  const errorMesage = screen.getByText('error');

  //Assert
  expect(errorMesage).toBeInTheDocument()
  })
});
