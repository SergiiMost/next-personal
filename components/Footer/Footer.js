import styles from './Footer.module.css'
import { FiGithub } from 'react-icons/fi'
import { RiLinkedinLine } from 'react-icons/ri'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span>Sergii Mostovyi, {currentYear}</span>
        <div className={styles.footerIconsWrapper}>
          <div className={styles.iconContainer}>
            <a href='https://github.com/SergiiMost' target='_blank' rel='noreferrer'>
              <div className='circledIconContainer circledIconContainerLink'>
                <FiGithub className='circledIcon' />
              </div>
            </a>
          </div>
          <div className={styles.iconContainer}>
            <a href='https://www.linkedin.com/in/sergii-mostovyi/' target='_blank' rel='noreferrer'>
              <div className='circledIconContainer circledIconContainerLink'>
                <RiLinkedinLine className='circledIcon' />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
