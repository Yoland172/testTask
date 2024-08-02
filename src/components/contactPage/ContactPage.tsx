import AddTags from "./addTags/AddTags";
import styles from "./ContactPage.module.scss";
import UserInfo from "./userInfo/UserInfo";
import UserTags from "./userTags/UserTags";


const ContactPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.userContainer}>
        <UserInfo/>
        <UserTags/>
        <AddTags/>
      </div>
    </div>
  )
}

export default ContactPage
