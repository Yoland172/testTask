import CloseIcon from '../../../ui/icon/CloseIcon'
import styles from './ContactItem.module.scss'
import TagItem from './tagItem/TagItem'

const ContactItem = () => {
  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}></div>
      <div className={styles.userInfoContainer}>
        <div className={styles.userNameContainer}>
            <h3>Volodya</h3>
            <h3>Muchkailuk</h3>
        </div>
        <p className={styles.userEmail}>volodvolodimer@gmail.com</p>

        <div className={styles.tagContainer}>
            <TagItem/>
            <TagItem/>
            <TagItem/>
            <TagItem/>
            <TagItem/>
            <TagItem/>
            <TagItem/>
            <TagItem/>
            <TagItem/>
        </div>
      </div>
      <div className={styles.closeButtonContainer}>
        <button><CloseIcon width={20} height={20}/></button>
      </div>
    </div>
  )
}

export default ContactItem
