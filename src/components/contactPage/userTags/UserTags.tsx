import { TagItem } from "../../../lib/types/types";
import styles from "./UserTag.module.scss";

interface UserTagsProps {
  tags?: TagItem[];
}

const UserTags = ({ tags }: UserTagsProps) => {
  return (
    <div className={styles.main}>
      <h2>Tags</h2>
      <div className={styles.tagContainer}>
        {tags && tags.map((el) => {
          return (
            <div className={styles.tag} key={el.id}>
              <p>{el.tag}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserTags;
