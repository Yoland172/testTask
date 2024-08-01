import styles from "./ContactList.module.scss";
import ContactItem from "./contacts/ContactItem";
import CreateContact from "./createContact/CreateContact";

const ContactList = () => {
  return (
    <div className={styles.main}>
      <CreateContact/>
      <div className={styles.contactsContainer}>
        <h2>Contacts</h2>
        <div className={styles.contacts}>
        <ContactItem/>
        <ContactItem/>
        <ContactItem/>
        <ContactItem/>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
