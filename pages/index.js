import Head from 'next/head'
import Link from 'next/link'
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiReact,
  SiBootstrap,
  SiCsharp,
  SiCloudflare,
} from 'react-icons/si'
import { FaDatabase, FaNodeJs } from 'react-icons/fa'
import { BsBoxArrowUpRight, BsBoxArrowRight, BsGithub } from 'react-icons/bs'
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
            <span className={styles.headingSecondary}>Sergii Mostovyi &nbsp;</span>
            <span className={styles.headingPrimary}>I create interactive experiences with modern tech. </span>
          </h1>
          <p className={styles.headingDescription}>
            I am a <span className='u-fw-400'>software developer</span> with a strong interest in web technology. I stay
            informed about the latest trends and focus on creating user-friendly experiences. <br /> Additionally, I am
            increasingly drawn to the potential of cloud development, recognizing its ability to enhance and scale web
            applications.
          </p>
          <p>
            Currently a web developer at{'  '}
            <a href='https://www.burstingsilver.com/' rel='noreferrer' target='_blank'>
              Bursting Silver
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
                  <SiCsharp color='#9c75d5' />
                  <span>C#</span>
                </span>
                <span className={styles.techContainer}>
                  <FaNodeJs color='#689F63' />
                  <span>Node.js</span>
                </span>
                <span className={styles.techContainer}>
                  <FaDatabase color='#336791' />
                  <span>SQL</span>
                </span>
              </div>
            </div>
            <div className={styles.technologiesContainer}>
              <span className={styles.techDirection}>Cloud: </span>
              <div>
                <span className={styles.techContainer}>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' height='1em' width='1em' fill='#155ea7'>
                    <title>microsoft-azure</title>
                    <path d='M13.05,4.24L6.56,18.05L2,18L7.09,9.24L13.05,4.24M13.75,5.33L22,19.76H6.74L16.04,18.1L11.17,12.31L13.75,5.33Z' />
                  </svg>
                  <span>Microsoft Azure</span>
                </span>
                <span className={styles.techContainer}>
                  <SiCloudflare color='#f6821f' />
                  <span>Cloudflare</span>
                </span>
              </div>
            </div>
          </div>
          {/* Certifications*/}
          <div className={styles.certifications}>
            <Heading tag='h3'>certifications</Heading>
            <div className={styles.certContainer}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#155ea7' className={styles.certSvg}>
                <title>microsoft-azure</title>
                <path d='M13.05,4.24L6.56,18.05L2,18L7.09,9.24L13.05,4.24M13.75,5.33L22,19.76H6.74L16.04,18.1L11.17,12.31L13.75,5.33Z' />
              </svg>
              <span>
                Microsoft Certified: Azure Developer Associate (
                <a
                  href='https://learn.microsoft.com/en-us/certifications/exams/az-204/'
                  target='_blank'
                  rel='noreferrer'
                >
                  AZ-204
                </a>
                , Sep 2023)
              </span>
            </div>
            <div className={styles.certContainer}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#155ea7' className={styles.certSvg}>
                <title>microsoft-azure</title>
                <path d='M13.05,4.24L6.56,18.05L2,18L7.09,9.24L13.05,4.24M13.75,5.33L22,19.76H6.74L16.04,18.1L11.17,12.31L13.75,5.33Z' />
              </svg>
              <span>
                Microsoft Certified: Azure Fundamentals ({' '}
                <a
                  href='https://learn.microsoft.com/en-us/certifications/exams/az-900/'
                  target='_blank'
                  rel='noreferrer'
                >
                  AZ-900
                </a>
                , Jan 2023)
              </span>
            </div>
          </div>
          {/* Projects*/}

          <div className={styles.projects} id='projects'>
            <Heading tag='h3'> projects</Heading>
            <div className={styles.projectContainer}>
              <h3 className={styles.projectHeader}>Cognitive Gym </h3>
              <p className={styles.projectDescription}>
                a web app that lets you take cognitive tests such as Calculation Speed, Chimp Memory, Sequence Memory,
                Spatial Memory, Verbal Memory, and more
              </p>
              <div className={styles.technologiesContainer}>
                <span className='u-mr-10'>technologies:</span>
                <span className={styles.techContainer}>
                  <SiAngular color='#d82d2f' />
                  <span>Angular</span>
                </span>
                <span className={styles.techContainer}>
                  <SiCloudflare color='#f6821f' />
                  <span>Cloudflare</span>
                </span>
              </div>
              <div className={styles.projectLinksContainer}>
                <Link href='/projects/cognitive-gym-app'>
                  <a className={styles.projectLink}>
                    <BsBoxArrowRight />
                    read more
                  </a>
                </Link>
                <div></div>
                <a href='https://cognitivegym.app/' target='_blank' rel='noreferrer' className={styles.projectLink}>
                  <BsBoxArrowUpRight />
                  visit
                </a>
              </div>
            </div>
            <div className={styles.projectContainer}>
              <h3 className={styles.projectHeader}>StackOverflow's filter </h3>
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
