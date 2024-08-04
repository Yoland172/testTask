import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";
import InputField from "../InputField";

describe("InputField", () => {

    const mockRegisterReq = {
        name: "input",
        onChange: jest.fn(),
        onBlur: jest.fn(),
        ref: jest.fn(),
      };
      const type = "text";
      const error = {
        message: "error",
        type: "manual",
        ref: { name: "input" },
      };
  test("renders without crashing", () => {
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

    //Assert
    expect(input).toBeInTheDocument();
  });

  test("should show validation error message ", () => {
    //Act
    render(
      <InputField
        registerReq={mockRegisterReq}
        type={type}
        error={error}
        placeholder="testInput"
      />
    );
    const errorMesage = screen.getByText("error");

    //Assert
    expect(errorMesage).toBeInTheDocument();
  });

  test("should work input length limit", async() => {
    //Act
    render(
      <InputField
        registerReq={mockRegisterReq}
        type={type}
        error={error}
        placeholder="testInput"
        maxLength={10}
      />
    );

    const input = screen.getByPlaceholderText('testInput');
    await userEvent.type(input, 'some loooooong message ')

    //Assert
    expect(input).toHaveValue('some loooo');
  })
});
