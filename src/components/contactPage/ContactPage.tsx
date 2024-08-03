import { ContactItemType } from "../../lib/types/types";
import AddTags from "./addTags/AddTags";
import styles from "./ContactPage.module.scss";
import UserInfo from "./userInfo/UserInfo";
import UserTags from "./userTags/UserTags";
interface ContactPageProps {
  userInfo?: ContactItemType;
  addTags: (tags: string[]) => void;
  isLoading: boolean;
}

const ContactPage = ({ userInfo, addTags, isLoading }: ContactPageProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.userContainer}>
        <UserInfo
          avatar_url={userInfo?.avatar_url}
          email={userInfo?.email}
          firstName={userInfo?.firstName}
          lastName={userInfo?.lastName}
        />
        <UserTags tags={userInfo?.tags} />
        <AddTags addTags={addTags} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ContactPage;
