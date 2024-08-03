import { useEffect, useState } from "react";
import { ContactItemType, CreateContactInputs } from "../../lib/types/types";
import {
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactsQuery,
} from "../../store/api/contacts";
import ContactList from "./ContactList";
import { transformApiData } from "../../lib/helper/transformApiDataHelper";
import { contactInfoCombiner } from "../../lib/helper/contactListHelpre";

const ContactListContainer = () => {
  const [contactsState, setContactsState] = useState<ContactItemType[]>([]);

  const { data } = useGetContactsQuery();
  const [addContact, { isLoading: isAdding }] = useAddContactMutation();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const handleAddContact = async ({
    email,
    firstName,
    lastName,
  }: CreateContactInputs) => {
    const fields = contactInfoCombiner(email, firstName, lastName);
    await addContact(fields).unwrap();
  };

  useEffect(() => {
    if (data) {
      setContactsState(transformApiData(data.resources));
    }
  }, [data]);

  return (
    <ContactList
      contacts={contactsState}
      addContact={handleAddContact}
      isAdding={isAdding}
      isDeleting={isDeleting}
      deleteContact={deleteContact}
    />
  );
};

export default ContactListContainer;
