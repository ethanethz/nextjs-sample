import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Ethan2';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ tohome, children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Learn how to build a personal website using Next.js' />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {tohome ? (
          <>
            <h1 className={utilStyles.container2}>
              <Link href='https://twitter.com/ethanethz' target='_blank' rel='noopener noreferrer'>
                <a>
                  <Image
                    priority
                    src='/images/cow.JPG'
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={name}
                  />
                </a>
              </Link>
              <Link
                href='https://jungfrauregion.swiss/de/sommer/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <a>
                  <Image
                    priority
                    src='/images/switzer.jpeg'
                    className={utilStyles.borderCircle2}
                    height={190}
                    width={190}
                    alt={name}
                  />
                </a>
              </Link>
              <Link href='https://twitter.com/ethanethz' target='_blank' rel='noopener noreferrer'>
                <a className={utilStyles.heading2Xl}>{name}</a>
              </Link>
            </h1>
            <b>This is Home</b>
          </>
        ) : (
          <>
            <h1 className={utilStyles.container2}>
              <Link
                href='https://profile.yoshimoto.co.jp/talent/detail?id=191'
                target='_blank'
                rel='noopener noreferrer'
              >
                <a>
                  <Image
                    priority
                    src='/images/cow.JPG'
                    className={utilStyles.borderCircle2}
                    height={190}
                    width={190}
                    alt={name}
                  />
                </a>
              </Link>
              <Link href='https://twitter.com/ethanethz'>
                <a>
                  <Image
                    priority
                    src='/images/Ethanfront.jpg'
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>

              <Link href='/'>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h1>
            <b>This is Mypage</b>
          </>
        )}
      </header>
      <main>{children}</main>
      {!tohome && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <b className={utilStyles.heading2Xl}>Thank you!</b>
      {/*<main2>{children2}</main2>*/}
      <Image
        src='/images/profile.jpeg'
        //layout='fill'
        width={80}
        height={80}
      />
    </div>
  );
}

