import Head from 'next/head'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Heading from '../../components/Heading/Heading'
import styles from '../../styles/cognitive-gym.module.css'
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
        <title>Sergii Mostovyi - Cognitive Gym App</title>
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1'></meta>
        <meta
          name='description'
          content='This page provides a detailed overview of a web application where you can exercise your cognitive abilities'
        />
        <meta name='author' content='Sergii Mostovyi'></meta>
      </Head>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className='content-container '>
        <div className={styles.headingContainer}>
          <Heading tag='h1' textCenter={true}>
            Cognitive Gym
          </Heading>
          <div className={styles.imageContainer}>
            <figure>
              <Zoom shouldRespectMaxDimension='true' overlayBgColorEnd={overlayColor}>
                <Image
                  src='/images/cognitive-gym-tests.png'
                  width='976'
                  height='664'
                  className={styles.image}
                  alt='A screenshot of the Cognitive Tests'
                />
              </Zoom>
              <figcaption className={styles.figcaption}>
                A screenshot showing the cognitive tests available at Cognitive Gym.
              </figcaption>
            </figure>
          </div>
        </div>
        <main>
          <h2 className={styles.headerSecondary}>Project context</h2>
          <p className='u-mb-10'>
            I enjoy doing cognitive challenges occasionally, especially during my commutes when there's nothing else to
            do. There are numerous websites online that offer cognitive tests like the Chimp Test, Verbal Memory Test,
            Sequence Memory Test, and more.
          </p>
          <p className='u-mb-10'>
            However, I've often been frustrated with the tests provided by these websites for the following reasons:
          </p>
          <ul className={`${styles.ul} u-mb-10`}>
            <li>Most of them have annoying ads that disrupt concentration during the tests.</li>
            <li>Many websites lack a mobile version of their tests or are not optimized for mobile connections.</li>
            <li>
              They don't allow customization of parameters such as the number of mistakes allowed before ending the
              game, or adjusting the test difficulty where applicable.
            </li>
            <li>Frequently, I found the user experience to be less than satisfactory.</li>
          </ul>
          <p className='u-mb-10'>
            So, I decided to develop my own product to address the issues described above. Additionally, I wanted to
            explore using Angular Material CDK independently of Angular Material styling, which presented a good
            opportunity to do so
          </p>
          <h2 className={`${styles.headerSecondary} u-mt-20`}>Cognitive tests</h2>
          <p className='u-mb-10'>Currently, there are 5 tests available on Cognitive Gym.</p>

          <p className='u-mb-10 u-mt-20'>
            <a href='https://cognitivegym.app/calculation-speed-test' target='_blank' rel='noreferrer'>
              1) Calculation Speed Test
            </a>
          </p>
          <div className='u-my-20'>
            <figure>
              <Zoom shouldRespectMaxDimension='true' overlayBgColorEnd={overlayColor}>
                <Image
                  src='/images/calculation-test.png'
                  width='625'
                  height='228'
                  alt='A screenshot showing the Calculation Speed Test UI.'
                  className={styles.image}
                />
              </Zoom>
              <figcaption className={styles.figcaption}>A screenshot showing the Calculation Speed Test UI.</figcaption>
            </figure>
          </div>
          <p className='u-mb-10'>
            The Calculation Speed Test measures how many calculations you can complete within a time slot. In this test,
            you will be presented with addition, subtraction,division, and multiplication equations to solve. There is
            no penalty fo incorrect answers, and each correct response will earh you a point towards your score.
          </p>
          <p className='u-mb-10'>
            The test will conclude once the allotted time is exhausted. By default, you are granted 1 minute to solve as
            many equations as you can. However, you have the option to adjust the test settings and select from time
            intervals of 30 seconds or 3 minutes. Additionally, you can choose between easy and hard difficulty modes.
          </p>

          <p className='u-mb-10 u-mt-20'>
            <a href='https://cognitivegym.app/chimp-test' target='_blank' rel='noreferrer'>
              2) Chimp Memory Test
            </a>
          </p>
          <div className='u-my-20'>
            <figure>
              <Zoom shouldRespectMaxDimension='true' overlayBgColorEnd={overlayColor}>
                <Image
                  src='/images/chimp-test.png'
                  width='625'
                  height='611'
                  alt='A screenshot showing the Chimp Memory Test UI.'
                  className={styles.image}
                />
              </Zoom>
              <figcaption className={styles.figcaption}>A screenshot showing the Chimp Memory Test UI.</figcaption>
            </figure>
          </div>
          <p className='u-mb-10'>
            The Chimp Test is a test of working memory for numerals, made famous by a study at the Primate Research
            Institute at Kyoto University that found chimpanzees can outperform humans on this task. You can watch a
            chimpanzee taking the test in this
            <a target='_blank' href='https://www.youtube.com/watch?v=zsXP8qeFF6A' rel='nofollow'>
              {' '}
              YouTube video{' '}
            </a>
            .
          </p>
          <p className='u-mb-10'>
            For this test, you will be presented with a set of numbers in random positions, and your task is to click on
            them in ascending order value.Successfully completing a level results in an increase in the total number of
            digits, while failing results in receiving a strike.
          </p>

          <p className='u-mb-10 u-mt-20'>
            <a href='https://cognitivegym.app/sequence-memory-test' target='_blank' rel='noreferrer'>
              3) Sequence Memory Test
            </a>
          </p>
          <div className='u-my-20'>
            <figure>
              <Zoom shouldRespectMaxDimension='true' overlayBgColorEnd={overlayColor}>
                <Image
                  src='/images/sequence-test.png'
                  width='624'
                  height='507'
                  alt='A screenshot showing the Sequence Memory Test.'
                  className={styles.image}
                />
              </Zoom>
              <figcaption className={styles.figcaption}>A screenshot showing the Sequence Memory Test UI.</figcaption>
            </figure>
          </div>
          <p className='u-mb-10'>The Sequence Memory Test evaluates your capacity to recall sequences.</p>
          <p className='u-mb-10'>
            Memorize the sequence of squares that change their color to yellow, then press them in the correct order.
            With each successful completion of the pattern, it extends further.
          </p>
          <p className='u-mb-10'>
            The test ends after three errors, although you have the option to adjust this setting to conclude after 2 or
            even 1 error in the settings.
          </p>

          <p className='u-mb-10 u-mt-20'>
            <a href='https://cognitivegym.app/spatial-memory-test' target='_blank' rel='noreferrer'>
              4) Spatial Memory Test
            </a>
          </p>
          <div className='u-my-20'>
            <figure>
              <Zoom shouldRespectMaxDimension='true' overlayBgColorEnd={overlayColor}>
                <Image
                  src='/images/spatial-test.png'
                  width='627'
                  height='337'
                  alt='A screenshot showing the Spatial Memory Test.'
                  className={styles.image}
                />
              </Zoom>
              <figcaption className={styles.figcaption}>A screenshot showing the Spatial Memory Test UI.</figcaption>
            </figure>
          </div>
          <p className='u-mb-10 '>
            The Spatial Memory Test is designed to evaluate your visual and spatial memory capabilities. Your task is to
            recall the positions of as many symbols on the board as you can.
          </p>
          <p className='u-mb-10'>
            First, you'll need to memorize the symbols and their positions on the board. Then, when you click Shuffle
            Symbols, the symbols will be rearranged into a random order, putting your memory to the test.
          </p>
          <p className='u-mb-10'>
            Your goal is to rearrange them back into the correct order, aligning with your initial memory. Successfully
            completing a level will result in an increase in the total number of symbols, making each level more
            demanding. However, failing to restore the correct order will earn you a strike.
          </p>

          <p className='u-mb-10 u-mt-20'>
            <a href='https://cognitivegym.app/verbal-memory-test' target='_blank' rel='noreferrer'>
              5) Verbal Memory Test
            </a>
          </p>
          <div className='u-my-20'>
            <figure>
              <Zoom shouldRespectMaxDimension='true' overlayBgColorEnd={overlayColor}>
                <Image
                  src='/images/verbal-test.png'
                  width='623'
                  height='251'
                  alt='A screenshot showing the Verbal Memory Test Test.'
                  className={styles.image}
                />
              </Zoom>
              <figcaption className={styles.figcaption}>A screenshot showing the Verbal Memory Test UI.</figcaption>
            </figure>
          </div>
          <p className='u-mb-10'>
            The Verbal Memory Test assesses your ability to simultaneously retain as many words as possible in your
            short-term memory.
          </p>
          <p className='u-mb-10'>
            Click Seen if a word was previously shown to you during the test, or click New if it was not. You will earn
            one point for each correct answer. The test concludes after three errors, but you can customize this setting
            to end after 2 or even 1 errors in the settings.
          </p>

          <h2 className={`${styles.headerSecondary} u-mt-20`}>Final thoughts </h2>
          <p className='u-mb-10'>
            I find this app functional and enjoyable to use. It's mobile-friendly and utilizes lazy loading to enhance
            performance. However, it still has a lot of room for improvement. I've identified several UX issues that
            need addressing, and I'm planning to redo some parts of the app in the near future. Additionally, I'm
            considering transitioning it from a single-page application (SPA) to one that uses static rendering for two
            main reasons:
          </p>
          <ul className={`${styles.ul} u-mb-10`}>
            <li>
              It has the potential to improve Time to First Byte (TTFB), First Contentful Paint (FCP), and Interaction
              to Next Paint (INP).
            </li>
            <li>It could enhance SEO since SPAs are not well-indexed by search engines.</li>
          </ul>
          <p className='u-mb-10'>
            Throughout the development process, I've had a positive experience working with Angular Material, Angular
            Material CDK, and RxJS, which have all contributed to the app's functionality and user experience.
          </p>
          <p className='u-mb-10'>
            Overall, I've had a rewarding experience with this project and look forward to working on version 2 of the
            Cognitive Gym App.
          </p>
        </main>
        <div className={styles.navigationContainer}>
          <Link href='/#projects'>
            <a className='u-align-center'>
              <BsBoxArrowLeft />
              <span className='u-ml-3'>go back</span>
            </a>
          </Link>
          <a href='https://cognitivegym.app/' target='_blank' rel='noreferrer'>
            visit <BsBoxArrowUpRight />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
