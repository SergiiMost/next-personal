import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiSass } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiAngular } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'
import { SiJava } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { BsBoxArrowRight } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

import Head from 'next/head'
import Link from 'next/link'

import Navbar from '../components/Navbar/Navbar'
import Heading from '../components/Heading/Heading'
import Footer from '../components/Footer/Footer'
import styles from '../styles/Index.module.css'

export default function Home({ theme, toggleTheme }) {
  return (
    <>
      <Head>
        <title>Sergii Mostovyi - personal website</title>
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1' />
        <meta name='author' content='Sergii Mostovyi'></meta>
        <meta
          name='description'
          content="Sergii Mostovyi's personal website about his interests, skills, projects, and contact info."
        />
      </Head>

      <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
      <div className='content-container'>
        <header>
          <h1 className={styles.headingContainer}>
            <span className={styles.headingSecondary}>Sergii Mostovyi</span>
            <span className={styles.headingPrimary}>I create interactive experiences with modern tech. </span>
          </h1>
          <h2 className={styles.headingDescription}>
            I am a <span className='u-fw-400'>Full Stack Web Developer</span> with a keen interest in web technology.
            I’m able to quickly learn new tools and technologies when needed. I’m always motivated by a challenge and
            well-organized to deliver consistent results.{' '}
          </h2>
          <p>
            Currently a web developer at{'  '}
            <a href='https://www.visualantidote.com/' rel='noreferrer' target='_blank'>
              Visual Antidote
            </a>
            .
          </p>
        </header>
        <main className={styles.main}>
          <div className={styles.technologies}>
            <Heading tag='h3'> technologies </Heading>
            <div className={styles.technologiesContainer}>
              <span className={styles.techDirection}>Front-end: </span>
              <div>
                <span className={styles.techContainer}>
                  <SiHtml5 color='#E44D26' />
                  <span>HTML5</span>
                </span>
                <span className={styles.techContainer}>
                  <SiCss3 color='#2862E9' />
                  <span>CSS</span>
                </span>
                <span className={styles.techContainer}>
                  <SiSass color='#C76494' />
                  <span>SCSS</span>
                </span>
                <span className={styles.techContainer}>
                  <SiJavascript color='#EFD81D' />
                  <span>JavaScript</span>
                </span>
                <span className={styles.techContainer}>
                  <SiTypescript color='#2f74c0' />
                  <span>TypeScript</span>
                </span>
                <span className={styles.techContainer}>
                  <SiAngular color='#d82d2f' />
                  <span>Angular</span>
                </span>
                <span className={styles.techContainer}>
                  <SiReact color='#61DAFB' />
                  <span>React</span>
                </span>
                <span className={styles.techContainer}>
                  <SiBootstrap color='#8a11f4' />
                  <span>Bootstrap</span>
                </span>
              </div>
            </div>
            <div className={styles.technologiesContainer}>
              <span className={styles.techDirection}>Back-end: </span>
              <div>
                <span className={styles.techContainer}>
                  <FaNodeJs color='#689F63' />
                  <span>Node.js</span>
                </span>
                <span className={styles.techContainer}>
                  <SiJava color='#E06E23' />
                  <span>Java</span>
                </span>
                <span className={styles.techContainer}>
                  <FaDatabase color='#336791' />
                  <span>PostgreSQL</span>
                </span>
              </div>
            </div>
          </div>
          {/* Certifications*/}
          <div className={styles.certifications}>
            <Heading tag='h3'>certifications</Heading>
            <div className={styles.certContainer}>
              <SiAngular size='24px' color='#d82d2f' style={{ minWidth: '24px' }} />
              <span>
                Angular Fundamentals ({' '}
                <a href='https://www.angularacademy.ca/' target='_blank' rel='noreferrer'>
                  Angular Academy
                </a>{' '}
                , Dec 2021 )
              </span>
            </div>
            <div className={styles.certContainer}>
              <SiAngular size='24px' color='#d82d2f' style={{ minWidth: '24px' }} />
              <span>
                Advanced Angular ({' '}
                <a href='https://www.angularacademy.ca/' target='_blank' rel='noreferrer'>
                  Angular Academy
                </a>{' '}
                , May 2022 )
              </span>
            </div>
          </div>
          {/* Projects*/}
          <div className={styles.projects} id='projects'>
            <Heading tag='h3'> projects</Heading>
            {/* <div className={styles.projectContainer}>
              <h3 className={styles.projectHeader}>Shopify's internship challenge </h3>
              <p className={styles.projectDescription}>
                a webpage that can search{' '}
                <a href='https://www.omdbapi.com/' target='_blank' rel='noreferrer'>
                  OMDb API{' '}
                </a>{' '}
                for movies and allow users to nominate favorite films that they feel should be up for nominations
              </p>
              <div className={styles.technologiesContainer}>
                <span className='u-mr-10'>technologies:</span>
                <span className={styles.techContainer}>
                  <SiReact color='#61DAFB' />
                  <span>React</span>
                </span>
                <span className={styles.techContainer}>
                  <SiCss3 color='#2862E9' />
                  <span>CSS</span>
                </span>
              </div>
              <div className={styles.projectLinksContainer}>
                <Link href='/projects/shopify-internship-challenge'>
                  <a className={styles.projectLink}>
                    <BsBoxArrowRight />
                    read more
                  </a>
                </Link>
                <a
                  href='https://github.com/SergiiMost/shoppies'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.projectLink}
                >
                  <BsGithub />
                  code
                </a>
                <a
                  href='https://sergiimost.github.io/shoppies/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.projectLink}
                >
                  <BsBoxArrowUpRight />
                  visit
                </a>
              </div>
            </div> */}
            {/*Project 2*/}
            <div className={styles.projectContainer}>
              <h3 className={styles.projectHeader}>Stackoverflow's filter </h3>
              <p className={styles.projectDescription}>
                a web app that makes it easy to select good questions (typically 3 upvotes or more) within a specified
                time on Stack Overflow
              </p>
              <div className={styles.technologiesContainer}>
                <span className='u-mr-10'>technologies:</span>
                <span className={styles.techContainer}>
                  <SiReact color='#61DAFB' />
                  <span>React</span>
                </span>
                <span className={styles.techContainer}>
                  <SiSass color='#C76494' />
                  <span>SCSS</span>
                </span>
              </div>
              <div className={styles.projectLinksContainer}>
                <Link href='/projects/stackoverflow-filter'>
                  <a className={styles.projectLink}>
                    <BsBoxArrowRight />
                    read more
                  </a>
                </Link>
                <a
                  href='https://github.com/SergiiMost/so-filter'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.projectLink}
                >
                  <BsGithub />
                  code
                </a>
                <a
                  href='https://sergiimost.github.io/so-filter/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.projectLink}
                >
                  <BsBoxArrowUpRight />
                  visit
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
