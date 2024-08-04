import styles from "./UserInfo.module.scss";

interface UserInfoProps {
  avatar_url?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}
const UserInfo = ({avatar_url,email,firstName,lastName}:UserInfoProps) => {
  return (
    <div className={styles.main}>
        <div className={styles.imageContainer}>
          <img src={avatar_url} alt="userAvatar" />
        </div>
        <div className={styles.userNameContainer}>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
        </div>
        <div className={styles.userEmailContainer}>
            <h2>{email}</h2>
        </div>
    </div>
  )
}

export default UserInfo
