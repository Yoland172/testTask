import InputField from "../../../ui/InputField/InputField";
import styles from "./CreateContact.module.scss";

const CreateContact = () => {
  return (
    <div className={styles.main}>
      <h2>Create Contact</h2>

      <div className={styles.inputFiledContainer}>
        <h3>First Name</h3>
        <InputField
          type="text"
          error={undefined}
          maxLength={100}
          placeholder="Some..."
        />
      </div>
      <div className={styles.inputFiledContainer}>
        <h3>Last Name</h3>
        <InputField
          type="text"
          error={undefined}
          maxLength={100}
          placeholder="Some..."
        />
      </div>
      <div className={styles.inputFiledContainer}>
        <h3>Email</h3>
        <InputField
          type="text"
          error={undefined}
          maxLength={100}
          placeholder="Some..."
        />
      </div>

      <button className={styles.submitButton}>Add Contact</button>
    </div>
  );
};

export default CreateContact;
