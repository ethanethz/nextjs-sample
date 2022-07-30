import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout.js';
import Layoutp from '../../components/layout-profile.js';
import utilStyles from '../../styles/utils.module.css';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Ethan's First Post</title>
      </Head>
      <a className={utilStyles.container1}>
        <a className={utilStyles.container2}>
          <h1>First Post</h1>
          <Layoutp>
            <h1>Hi! I'm Ethan from Vietnam!</h1>
          </Layoutp>
          <h2>
            <Link href='/'>
              <a>Back to home</a>
            </Link>
          </h2>

          <h2>
            <a
              href='https://twitter.com/ethanethz'
              target='_blank'
              rel='noopener noreferrer'
              title='see on Twitter?'
            >
              About Me
            </a>
          </h2>
        </a>
        <p>
          Go to <a href='second-post'>My 2nd Page</a>.
        </p>
        <h2>
          <Link href='/'>
            <b>Howdy????</b>
          </Link>
        </h2>
      </a>
    </Layout>
  );
}

