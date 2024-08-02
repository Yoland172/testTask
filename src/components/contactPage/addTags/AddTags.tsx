import styles from "./AddTags.module.scss";

const AddTags = () => {
  return (
    <div className={styles.main}>
      <textarea>some</textarea>
      <div className={styles.buttonContainer}>
        <button>Add Tag</button>
      </div>
    </div>
  );
};

export default AddTags;
