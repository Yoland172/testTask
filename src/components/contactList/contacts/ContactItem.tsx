import { TagItem as TagItemType } from '../../../lib/types/types'
import CloseIcon from '../../../ui/icon/CloseIcon'
import styles from './ContactItem.module.scss'
import TagItem from './tagItem/TagItem'

interface ContactItem {
  avatar_url:string,
  email:string,
  firstName?: string,
  lastName?:string,
  tags:TagItemType[]
}

const ContactItem = ({avatar_url, email, firstName,lastName,tags}:ContactItem) => {
  return (
    <div className={styles.main}>
        <img src={avatar_url} alt="user avatar" className={styles.imageContainer}/>
      <div className={styles.userInfoContainer}>
        <div className={styles.userNameContainer}>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
        </div>
        <p className={styles.userEmail}>{email}</p>

        <div className={styles.tagContainer}>
    {
      tags.length > 0 && tags.map(el => {
        return <TagItem title={el.tag} key={el.id}/>
      })
    }
        </div>
      </div>
      <div className={styles.closeButtonContainer}>
        <button><CloseIcon width={20} height={20}/></button>
      </div>
    </div>
  )
}

export default ContactItem
