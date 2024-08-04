import { useEffect, useState } from "react";
import { ContactItemType, CreateContactInputs } from "../../lib/types/types";
import {
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactsQuery,
} from "../../store/api/contacts";
import ContactList from "./ContactList";
import { transformApiData } from "../../lib/helper/transformApiDataHelper";
import { contactInfoCombiner } from "../../lib/helper/contactListHelper";
import { toast } from "react-toastify";

const ContactListContainer = () => {
  const [contactsState, setContactsState] = useState<ContactItemType[]>([]);

  const { data, isError:getError } = useGetContactsQuery();
  const [addContact, { isLoading: isAdding, isError:addError  }] = useAddContactMutation();
  const [deleteContact, { isLoading: isDeleting, isError:deleteError }] = useDeleteContactMutation();

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

  useEffect(() => {
    if(getError || addError || deleteError) {
      toast.error("Ooops something went wrong. We are putting of the fire 🔥", {
        position:"bottom-right",
        className:"toast",
        progressClassName:"toastPropgressBar",
      });
    }
  },[getError,addError,deleteError])

  return (
    <>
      <ContactList
        contacts={contactsState}
        addContact={handleAddContact}
        isAdding={isAdding}
        isDeleting={isDeleting}
        deleteContact={deleteContact}
      />
    </>
  );
};

export default ContactListContainer;
