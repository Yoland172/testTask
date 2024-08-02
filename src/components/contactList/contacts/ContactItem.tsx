import { Link } from "react-router-dom";
import { TagItem as TagItemType } from "../../../lib/types/types";
import CloseIcon from "../../ui/icon/CloseIcon";
import styles from "./ContactItem.module.scss";
import TagItem from "../../ui/tagItem/TagItem";

interface ContactItem {
  id: string;
  avatar_url: string;
  email: string;
  firstName?: string;
  lastName?: string;
  tags: TagItemType[];
  deleteContact: () => void;
  isLoading?: boolean;
}

const ContactItem = ({
  id,
  isLoading,
  avatar_url,
  email,
  firstName,
  lastName,
  tags,
  deleteContact,
}: ContactItem) => {
  return (
    <div className={styles.main}>
      <img
        src={avatar_url}
        alt="user avatar"
        className={styles.imageContainer}
      />
      <div className={styles.userInfoContainer}>
        <Link to={`/contact/${id}`} className={styles.userNameContainer}>
          <h3>{firstName}</h3>
          <h3>{lastName}</h3>
        </Link>
        <p className={styles.userEmail}>{email}</p>

        <div className={styles.tagContainer}>
          {tags.length > 0 &&
            tags.map((el) => {
              return <TagItem title={el.tag} key={el.id} />;
            })}
        </div>
      </div>
      <div className={styles.deleteButtonContainer}>
        <button onClick={deleteContact} disabled={isLoading}>
          <CloseIcon width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
