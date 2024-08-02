import styles from "./UserInfo.module.scss";

const UserInfo = () => {
  return (
    <div className={styles.main}>
        <div className={styles.imageContainer}></div>
        <div className={styles.userNameContainer}>
            <h1>Volodya</h1>
            <h1>Mukhailuk</h1>
        </div>
        <div className={styles.userEmailContainer}>
            <h2>volodvolodimr@gmailcom</h2>
        </div>
    </div>
  )
}

export default UserInfo
