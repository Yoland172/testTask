import { ContactItemType, CreateContactInputs,  } from "../../lib/types/types";
import styles from "./ContactList.module.scss";
import ContactItem from "./contacts/ContactItem";
import CreateContact from "./createContact/CreateContact";

interface ContactListProps {
  contacts: ContactItemType[];
  addContact: (userInfo: CreateContactInputs) => void;
  isAdding?: boolean;
  isDeleting?: boolean;
  deleteContact: (id: string) => void;
}

const ContactList = ({
  contacts,
  addContact,
  isAdding,
  deleteContact,
  isDeleting,
}: ContactListProps) => {
  return (
    <div className={styles.main}>
      <CreateContact addContact={addContact} isLoading={isAdding} />
      <div className={styles.contactsContainer}>
        <h2>Contacts</h2>
        <div className={styles.contacts}>
          {contacts &&
            contacts.map((el) => {
              return (
                <ContactItem
                  key={el.id}
                  id={el.id}
                  avatar_url={el.avatar_url}
                  email={el.email}
                  firstName={el.firstName}
                  lastName={el.lastName}
                  tags={el.tags}
                  deleteContact={() => {
                    deleteContact(el.id);
                  }}
                  isLoading={isDeleting}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
