import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout2 from '../../components/layout2.js';
import Layout from '../../components/layout.js';
import utilStyles from '../../styles/utils.module.css';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Ethan's Second Post</title>
      </Head>
      <a className={utilStyles.container1}>
        <a className={utilStyles.container2}>
          <h1>Second Post</h1>
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
        <h2>
          <Link href='/'>
            <b>Howdy????</b>
          </Link>
        </h2>
      </a>
    </Layout>
  );
}
