import Link from 'next/link'
import { RiMoonClearLine } from 'react-icons/ri'
import { RiSunLine } from 'react-icons/ri'
import styles from './Navbar.module.css'

export default function Navbar({ toggleTheme, theme }) {
  return (
    <nav className={styles.container}>
      <div className={styles.iconsWrapper}>
        {theme === 'light' ? (
          <Link href='/'>
            <a className={styles.logoLink}>
              <img src='/icons/logo-sm-light.svg' alt='logo' />
            </a>
          </Link>
        ) : (
          <Link href='/'>
            <a className={styles.logoLink}>
              <img src='/icons/logo-sm-dark.svg' alt='logo' />
            </a>
          </Link>
        )}

        {theme === 'light' ? (
          <div className='circledIconContainer' onClick={() => toggleTheme()}>
            <RiMoonClearLine className='circledIcon' />
          </div>
        ) : (
          <div className='circledIconContainer' onClick={() => toggleTheme()}>
            <RiSunLine className='circledIcon' />
          </div>
        )}
      </div>
    </nav>
  )
}
