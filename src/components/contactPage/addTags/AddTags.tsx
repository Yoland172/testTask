import { useState } from "react";
import styles from "./AddTags.module.scss";
import Loader from "../../ui/loader/Loader";

interface AddTagsProps{
  addTags:(tags:string[])=>void;
  isLoading:boolean;
}

const AddTags = ({addTags,isLoading}:AddTagsProps) => {
  const [tags, setTags] = useState<string>("");

  const onSubmit = () => {
    if (tags.length > 0) {
      const tagArray = tags.trim().split(/\s+/);
      addTags(tagArray);
      setTags('');
    }
  };

  return (
    <div className={styles.main}>
      <textarea
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Some tags..."
      ></textarea>
      <div className={styles.buttonContainer}>
        <button onClick={onSubmit}>{isLoading ? <Loader/> : "Add Tags"}</button>
      </div>
    </div>
  );
};

export default AddTags;
