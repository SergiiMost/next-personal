import Head from 'next/head'
import { useEffect } from 'react'
import Link from 'next/link'
import Zoom from 'react-medium-image-zoom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Heading from '../../components/Heading/Heading'
import styles from '../../styles/shopify-internship-challenge.module.css'
import 'react-medium-image-zoom/dist/styles.css'

import { BsBoxArrowUpRight } from 'react-icons/bs'
import { BsBoxArrowLeft } from 'react-icons/bs'

export default function ShopifyChallenge({ theme, toggleTheme }) {
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
        <title>Sergii Mostovyi - Shopify's internship challenge.</title>
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1'></meta>
        <meta
          name='description'
          content="This page provides describes my implementation of Shopify's front-end internship challenge."
        />
        <meta name='author' content='Sergii Mostovyi'></meta>
      </Head>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className='content-container'>
        <div className={styles.headingContainer}>
          <Heading tag='h1'>Shopify's internship challenge</Heading>
          <div className={styles.imageContainer}>
            <figure>
              <Zoom shouldRespectMaxDimension='true' overlayBgColorEnd={overlayColor}>
                <img alt='A screenshot of the UI' src='/images/shopify-lg.png' className={styles.image} />
              </Zoom>
              <figcaption className={styles.figcaption}>A screenshot of the UI.</figcaption>
            </figure>
          </div>
        </div>
        <main className={styles.mainContent}>
          <h2 className={styles.headerSecondary}>Project context</h2>
          <p>Here is the description of the challenge:</p>
          <blockquote className={styles.blockquote}>
            <h4 className='u-mb-05'>The Shoppies: Movie awards for entrepreneurs</h4>
            <p className='u-mb-10'>
              Shopify has branched out into movie award shows and we need your help. Please build us an app to help
              manage our movie nominations for the upcoming Shoppies.
            </p>
            <h4 className='u-mb-05'>The Challenge</h4>
            <p className='u-mb-10'>
              We need a webpage that can search{' '}
              <a href='http://www.omdbapi.com/' target='_blank' rel='noreferrer'>
                OMDB
              </a>{' '}
              for movies, and allow the user to save their favorite films they feel should be up for nomination. When
              they've selected 5 nominees they should be notified they're finished.
            </p>
            <p className='u-mb-05'>We'd like a simple to use interface that makes it easy to:</p>
            <ol className='u-mb-10'>
              <li>Search OMDB and display the results (movies only)</li>
              <li>Add a movie from the search results to our nomination list</li>
              <li>View the list of films already nominated</li>
              <li>Remove a nominee from the nomination list</li>
            </ol>
            <h4 className='u-mb-05'>Technical requirements</h4>
            <ol>
              <li>Search results should come from OMDB's API.</li>
              <li>
                Each search result should list at least its title, year of release and a button to nominate that film.
              </li>
              <li>Updates to the search terms should update the result list.</li>
              <li>Movies in search results can be added and removed from the nomination list.</li>
              <li>If a search result has already been nominated, disable its nominate button.</li>
              <li>Display a banner when the user has 5 nominations.</li>
            </ol>
          </blockquote>
          <p className='u-mb-10'>
            In addition to the technical requirements, I decided to implement some extra features:
          </p>
          <ol className={styles.list}>
            <li>
              To prevent unnecessary requests to{' '}
              <a href='' target='_blank' rel='noreferrer'>
                OMDB
              </a>
              's API, I implemented debounce functionality. Requests to fetch data are sent after a user stops typing
              for 800ms.
            </li>
            <li>I used localStorage to save nominations if a user leaves the page.</li>
            <li>I added animations to improve UX.</li>
          </ol>
          <h2 className={styles.headerSecondary}>Final thoughts </h2>
          <p>
            It was an interesting project to work on. I learned how to implement debounce functionality to prevent
            unnecessary API calls. Also, I experimented with different layouts and used Figma to design the UI.
          </p>
        </main>
        <div className={styles.navigationContainer}>
          <Link href='/#projects'>
            <a className='u-align-center'>
              <BsBoxArrowLeft />
              <span className='u-ml-3'>go back</span>
            </a>
          </Link>
          <a href='https://sergiimost.github.io/shoppies/' target='_blank' rel='noreferrer'>
            visit <BsBoxArrowUpRight />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
