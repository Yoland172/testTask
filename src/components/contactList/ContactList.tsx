import { CreateContactInputs, ResourcesItem } from "../../lib/types/types";
import styles from "./ContactList.module.scss";
import ContactItem from "./contacts/ContactItem";
import CreateContact from "./createContact/CreateContact";

interface ContactListProps {
  contacts?: ResourcesItem[];
  addContact: (userInfo:CreateContactInputs) => void
}

const ContactList = ({ contacts,addContact }: ContactListProps) => {
  return (
    <div className={styles.main}>
      <CreateContact  addContact={addContact}/>
      <div className={styles.contactsContainer}>
        <h2>Contacts</h2>
        <div className={styles.contacts}>
          {contacts &&
            contacts.map((el) => {
              return (
                <ContactItem
                  avatar_url={el.avatar_url}
                  email={el.fields.email[0].value}
                  firstName={
                    el.fields["first name"]
                      ? el.fields["first name"][0].value
                      : ""
                  }
                  lastName={
                    el.fields["last name"]
                      ? el.fields["last name"][0].value
                      : ""
                  }
                  tags={el.tags}
                  key={el.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
