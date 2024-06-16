import Head from 'next/head'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
          content='This  page provides a detailed overview of a web application that makes it easy to select good questions within a selected period of time on Stack Overflow.'
        />
        <meta name='author' content='Sergii Mostovyi'></meta>
      </Head>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className='content-container so-filter'>
        <div className={styles.headingContainer}>
          <Heading tag='h1' textCenter={true}>
            Stack Overflow's filter
          </Heading>
          <div className={styles.imageContainer}>
            <figure>
              <Zoom shouldRespectMaxDimension='true' overlayBgColorEnd={overlayColor}>
                <Image
                  src='/images/so-ui.png'
                  width='700'
                  height='473'
                  className={styles.image}
                  alt='A screenshot of the UI'
                />
              </Zoom>
              <figcaption className={styles.figcaption}>A screenshot of the UI.</figcaption>
            </figure>
          </div>
        </div>
        <main>
          <h2 className={styles.headerSecondary}>Project context</h2>
          <p className='u-mb-10'>
            I'm a devoted Stack Overflow (SO) enthusiast with approximately 2.6k reputation points on the platform. SO
            is a remarkably well-engineered site. However, I wanted to efficiently identify high-quality questions
            within a specified timeframe. In this context, 'good questions' typically refer to those that receive three
            or more upvotes.
          </p>
          <p className='u-mb-10'>
            As far as I'm aware, Stack Overflow's user interface lacks the functionality to easily search for questions
            based on the aforementioned criteria. For instance, I sought the ability to locate questions with five or
            more upvotes, tagged with 'javascript' and 'react,' and asked within the past two weeks.
          </p>
          <p>
            After reviewing Stack Overflow's API documentation, I discovered a way to retrieve data that met my
            criteria. The subsequent steps primarily involved designing a user-friendly interface. To enhance the user
            experience, I also incorporated tag validation; for instance, 'javaxd' is not a valid tag.
          </p>
          <div className='u-my-20'>
            <figure>
              <Zoom shouldRespectMaxDimension='true' overlayBgColorEnd={overlayColor}>
                <Image
                  src='/images/so-tag2.png'
                  width='700'
                  height='185'
                  alt='A screenshot of the UI with a tag error'
                  className={styles.image}
                />
              </Zoom>
              <figcaption className={styles.figcaption}>Tag validation.</figcaption>
            </figure>
          </div>
          <h2 className={styles.headerSecondary}>Final thoughts </h2>
          <p>
            It was an enjoyable project to undertake. I delved into Stack Overflow's API documentation and honed my
            React/CSS skills. I periodically use this application to discover valuable questions and further my
            learning.
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
