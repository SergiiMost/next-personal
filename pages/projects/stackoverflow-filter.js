import Head from 'next/head'
import { useEffect } from 'react'
import Link from 'next/link'
import Zoom from 'react-medium-image-zoom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Heading from '../../components/Heading/Heading'
import styles from '../../styles/stackoverflow-filter.module.css'
import 'react-medium-image-zoom/dist/styles.css'

import { BsBoxArrowUpRight } from 'react-icons/bs'
import { BsBoxArrowLeft } from 'react-icons/bs'

export default function SoFilter({ theme, toggleTheme }) {
  const lightOverlay = 'rgba(255, 255, 255, 0.95)'
  const darkOverlay = 'rgba(40, 40, 50, 0.95)'
  let overlayColor = theme === 'light' ? lightOverlay : darkOverlay

  useEffect(() => {
    let theme = localStorage.getItem('preferredTheme')
    if (theme) {
      document.body.dataset.theme = theme
    }
  }, [])

  return (
    <div className={styles.soWrapper}>
      <Head>
        <title>Sergii Mostovyi - Stack Overflow's filter project.</title>
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1'></meta>
        <meta
          name='description'
          content='This page provides a detailed overview of a web application that makes it easy to select good questions within a selected period of time on Stack Overflow.'
        />
        <meta name='author' content='Sergii Mostovyi'></meta>
      </Head>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className='content-container so-filter'>
        <div className={styles.headingContainer}>
          <Heading tag='h1'>Stack Overflow's filter</Heading>
          <div className={styles.imageContainer}>
            <figure>
              <Zoom shouldRespectMaxDimension='true' overlayBgColorEnd={overlayColor}>
                <img alt='A screenshot of the UI' src='/images/so-ui.png' className={styles.image} />
              </Zoom>
              <figcaption className={styles.figcaption}>A screenshot of the UI.</figcaption>
            </figure>
          </div>
        </div>
        <main>
          <h2 className={styles.headerSecondary}>Project context</h2>
          <p className='u-mb-10'>
            I’m a huge fan of Stack Overflow (SO), and I also have ~ 1.7k reputation points on the platform. SO is a
            very well-engineered project. Yet, I wanted to be able to select good questions within a specific time
            frame. Good questions are usually questions that get 3 upvotes or more.
          </p>
          <p className='u-mb-10'>
            As far as I know, SO’s user interface doesn’t have functionality that facilitates searching for questions
            based on the requirements mentioned before. For example, I wanted to be able to find questions that have 5
            upvotes or more with tags "javascript, react" and were asked in the last 2 weeks.
          </p>
          <p>
            After going through SO's API documentation, I figured out that there was a way to fetch data that satisfied
            my requirements. The rest was just a matter of creating a decent UI. In order to improve UX, I also
            implemented tag validation. For example, 'javaxd' is not the correct tag.
          </p>
          <div className='u-my-20'>
            <figure>
              <Zoom shouldRespectMaxDimension='true' overlayBgColorEnd={overlayColor}>
                <img alt='A screenshot of the UI with a tag error' src='/images/so-tag2.png' className={styles.image} />
              </Zoom>
              <figcaption className={styles.figcaption}>Tag validation.</figcaption>
            </figure>
          </div>
          <h2 className={styles.headerSecondary}>Final thoughts </h2>
          <p>
            It was a fun project to work on. I explored Stack Overflow's API documentation and improved my React/CSS
            skills. I use this app from time to time to find good questions and learn from them.{' '}
          </p>
        </main>
        <div className={styles.navigationContainer}>
          <Link href='/#projects'>
            <a className='u-align-center'>
              <BsBoxArrowLeft />
              <span className='u-ml-3'>go back</span>
            </a>
          </Link>
          <a href='https://sergiimost.github.io/so-filter/' target='_blank' rel='noreferrer'>
            visit <BsBoxArrowUpRight />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
