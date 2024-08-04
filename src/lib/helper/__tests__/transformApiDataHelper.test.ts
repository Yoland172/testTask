import { transformApiData } from "../transformApiDataHelper";

describe("transformApiData", () => {
  it("transforms data correctly with all fields present", () => {
    const sampleData = [
      {
        id: "1",
        avatar_url: "http://example.com/avatar.jpg",
        fields: {
          "first name": [
            {
              value: "John",
              is_primary: false,
              label: "first name",
              modifier: "",
            },
          ],
          "last name": [
            {
              value: "Doe",
              is_primary: false,
              label: "last name",
              modifier: "",
            },
          ],
          email: [
            {
              value: "john.doe@example.com",
              is_primary: true,
              label: "email",
              modifier: "",
            },
          ],
        },
        tags: [
          { id: "tag1", tag: "Developer" },
          { id: "tag2", tag: "Blogger" },
        ],
      },
    ];

    const expected = [
      {
        id: "1",
        avatar_url: "http://example.com/avatar.jpg",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        tags: [
          { id: "tag1", tag: "Developer" },
          { id: "tag2", tag: "Blogger" },
        ],
      },
    ];

    expect(transformApiData(sampleData)).toEqual(expected);
  });

  it("applies default values for missing optional fields", () => {
    const sampleData = [
      {
        id: "2",
        fields: {
          email: [
            {
              value: "jane.doe@example.com",
              is_primary: true,
              label: "email",
              modifier: "",
            },
          ],
        },
        tags: [], // Assuming no tags provided
      },
    ];

    const expected = [
      {
        id: "2",
        avatar_url: "",
        firstName: "unnamed",
        lastName: "user",
        email: "jane.doe@example.com",
        tags: [], // Should be empty
      },
    ];

    expect(transformApiData(sampleData)).toEqual(expected);
  });

  it("missing name fields", () => {
    const sampleData = [
      {
        id: "3",
        avatar_url: "htts://litnk....",
        fields: {
          email: [
            {
              value: "jane@example.com",
              is_primary: true,
              label: "email",
              modifier: "",
            },
          ],
        },
        tags: [{ id: "tag3", tag: "User" }],
      },
    ];

    const expected = [
      {
        id: "3",
        avatar_url: "htts://litnk....",
        firstName: "unnamed",
        lastName: "user",
        email: "jane@example.com",
        tags: [{ id: "tag3", tag: "User" }],
      },
    ];

    expect(transformApiData(sampleData)).toEqual(expected);
  });
});
