import styles from './Heading.module.css'

export default function Heading({ tag, children }) {
  const Tag = tag
  return (
    <div className={styles.headingWrapper}>
      <Tag className={`${styles.headingGradient} ${styles.headingPadding}`}>
        <span>{children}</span>
      </Tag>
    </div>
  )
}
