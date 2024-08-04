import { contactInfoCombiner } from "../contactListHelper";

describe("contactInfoCombiner", () => {
  it("returns correct fields with both first name and last name provided", () => {
    const result = contactInfoCombiner("user@example.com", "John", "Doe");
    expect(result).toEqual({
      email: [
        {
          value: "user@example.com",
          modifier: "",
          label: "email",
          is_primary: false,
        },
      ],
      "first name": [
        { value: "John", modifier: "", label: "first name", is_primary: false },
      ],
      "last name": [
        { value: "Doe", modifier: "", label: "last name", is_primary: false },
      ],
    });
  });

  test("returns correct fields with only first name provided", () => {
    const result = contactInfoCombiner("user@example.com", "John", undefined);
    expect(result).toEqual({
      email: [
        {
          value: "user@example.com",
          modifier: "",
          label: "email",
          is_primary: false,
        },
      ],
      "first name": [
        { value: "John", modifier: "", label: "first name", is_primary: false },
      ],
    });
    expect(result["last name"]).toBeUndefined();
  });

  test("returns correct fields with only last name provided", () => {
    const result = contactInfoCombiner("user@example.com", undefined, "Doe");
    expect(result).toEqual({
      email: [
        {
          value: "user@example.com",
          modifier: "",
          label: "email",
          is_primary: false,
        },
      ],
      "last name": [
        { value: "Doe", modifier: "", label: "last name", is_primary: false },
      ],
    });
    expect(result["first name"]).toBeUndefined();
  });
});
