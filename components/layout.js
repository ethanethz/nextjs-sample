import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Ethan1';
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
      <h1>
      <p>
          This is Somei North4 or contact{' '}
          <a
            href='https://twitter.com/ethanethz'
            target='_blank'
            rel='noopener noreferrer'>
              me</a>?</p>
      </h1>
    <div className={styles.header2}>
    <a>

            <Image
                    priority
                    src='/images/somei.jpg'
                    //className={utilStyles.borderCircle}
                    height={144}
                    width={250}
                    alt={name}
                  />
                </a>
                <a>
                  <Image
                    priority
                    src='/images/somei2.jpg'
                    //className={utilStyles.borderCircle}
                    height={144}
                    width={250}
                    alt={name}
                  />
                </a>


    </div>

        {/*{tohome ? (
          <>
            <h1 className={utilStyles.container2}>
              <Link href='https://twitter.com/ethanethz' target='_blank' rel='noopener noreferrer'>
                <a>
                  <Image
                    priority
                    src='/images/Ethanback.jpg'
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
                    className={utilStyles.borderCircle}
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
                href='https://jungfrauregion.swiss/de/sommer/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <a>
                  <Image
                    priority
                    src='/images/switzer.jpeg'
                    className={utilStyles.borderCircle}
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
        )}*/}
      </header>
      <main>{children}</main>
      {!tohome && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
<a>
      <footer className={styles.footer}>
      <Link href='https://twitter.com/ethanethz'
            target='_blank'
            rel='noopener noreferrer'>
            <b>About me</b>
      </Link>
      <Link href='https://u-aizu.ac.jp/campus/apartment/'
            target='_blank'
            rel='noopener noreferrer'>
            <b>Go to official</b>
      </Link>
      <Link href='https://www.youtube.com/watch?v=MzHZCfGQsVs&list=PLq_XQuPL5jQZSias4LxjW7P3gocrgQROk'
            target='_blank'
            rel='noopener noreferrer'>
            <b>My playlist</b>
      </Link>


      </footer>
      </a>
    </div>
  );
}

