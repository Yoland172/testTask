import { ResourcesItem } from "../../lib/types/types";
import AddTags from "./addTags/AddTags";
import styles from "./ContactPage.module.scss";
import UserInfo from "./userInfo/UserInfo";
import UserTags from "./userTags/UserTags";
interface ContactPageProps {
  userInfo?: ResourcesItem;
  addTags:(tags:string[]) =>void;
  isLoading:boolean
}

const ContactPage = ({ userInfo,addTags,isLoading }: ContactPageProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.userContainer}>
        <UserInfo
          avatar_url={userInfo?.avatar_url}
          email={userInfo?.fields.email[0].value}
          firstName={
            userInfo?.fields["first name"]
              ? userInfo?.fields["first name"][0].value
              : ""
          }
          lastName={
            userInfo?.fields["last name"]
              ? userInfo?.fields["last name"][0].value
              : ""
          }
        />
        <UserTags tags={userInfo?.tags}/>
        <AddTags addTags={addTags} isLoading={isLoading}/>
      </div>
    </div>
  );
};

export default ContactPage;
