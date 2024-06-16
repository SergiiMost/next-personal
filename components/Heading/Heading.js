import styles from './Heading.module.css'

export default function Heading({ tag, textCenter, children }) {
  const Tag = tag

  return (
    <div className={`${styles.headingWrapper} ${textCenter ? styles.textCenter : ''}`}>
      <Tag className={`${styles.headingGradient} ${styles.headingPadding}`}>
        <span>{children}</span>
      </Tag>
    </div>
  )
}
