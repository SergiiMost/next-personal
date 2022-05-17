import { useState, useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')
  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const toggleTheme = () => setTheme(nextTheme)

  useEffect(() => {
    document.body.dataset.theme = theme
    localStorage.setItem('preferredTheme', theme)
  }, [theme])

  return <Component {...pageProps} toggleTheme={toggleTheme} theme={theme} />
}

export default MyApp
