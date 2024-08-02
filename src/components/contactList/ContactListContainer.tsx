import { CreateContactInputs, Fields } from "../../lib/types/types";
import {
  useAddContactMutation,
  useGetContactsQuery,
} from "../../store/api/contacts";
import ContactList from "./ContactList";

const ContactListContainer = () => {
  const { data } = useGetContactsQuery();

  const [addContact, { isLoading }] = useAddContactMutation();

  const handleAddContact = async ({
    email,
    firstName,
    lastName,
  }: CreateContactInputs) => {
    const fields: Fields = {
      email: [
        { value: email, modifier: "", label: "email", is_primary: false },
      ],
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
        {
          value: lastName,
          modifier: "",
          label: "last name",
          is_primary: false,
        },
      ];
    }
    await addContact(fields).unwrap();
  };
  return (
    <ContactList contacts={data?.resources} addContact={handleAddContact} />
  );
};

export default ContactListContainer;
