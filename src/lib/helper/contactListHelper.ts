import { Fields } from "../types/types";

export const contactInfoCombiner = (
  email: string,
  firstName: string | undefined,
  lastName: string | undefined
): Fields => {
  const fields: Fields = {
    email: [{ value: email, modifier: "", label: "email", is_primary: false }],
  };
  if (firstName) {
    fields["first name"] = [
      {
        value: firstName,
        modifier: "",
        label: "first name",
        is_primary: false,
      },
    ];
  }
  if (lastName) {
    fields["last name"] = [
      { value: lastName, modifier: "", label: "last name", is_primary: false },
    ];
  }

  return fields;
};
