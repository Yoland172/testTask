import styles from "./TagItem.module.scss";

interface TagItemProps{
  title:string
}

const TagItem = ({title}:TagItemProps) => {
  return (
    <div className={styles.main}>
      <p>{title}</p>
    </div>
  )
}

export default TagItem
