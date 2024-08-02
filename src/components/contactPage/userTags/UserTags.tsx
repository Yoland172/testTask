import styles from './UserTag.module.scss';

const UserTags = () => {
  return (
    <div className={styles.main}>
        <h2>Tags</h2>
        <div className={styles.tagContainer}>
          <div className={styles.tag}>
            <p>some</p>
          </div>
          <div className={styles.tag}>
            <p>some</p>
          </div>
          <div className={styles.tag}>
            <p>some</p>
          </div>
          <div className={styles.tag}>
            <p>some</p>
          </div>
          <div className={styles.tag}>
            <p>some</p>
          </div>
        </div>
    </div>
  )
}

export default UserTags
