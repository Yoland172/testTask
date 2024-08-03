import { ContactItemType, ResourcesItem } from "../types/types";

export const transformApiData = (data: ResourcesItem[]): ContactItemType[] => {
  return data.map((el) => {
    return {
      id: el.id,
      avatar_url: el.avatar_url ? el.avatar_url : "",
      firstName: el.fields["first name"]
        ? el.fields["first name"][0].value
        : "",
      lastName: el.fields["last name"] ? el.fields["last name"][0].value : "",
      email: el.fields.email ? el.fields.email[0].value : "",
      tags: el.tags,
    };
  });
};
