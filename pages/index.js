import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
//import Styles from '../components/layout.module.css';
import Image from 'next/image';
import styles from '../components/layout.module.css';

export default function Home() {
  return (
    <Layout tohome>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Introduction]</p>
        <p>
          This is Ethan's 2nd website - I’m building a site like{' '}
          <a
            href='https://ethans-team-17.adalo.com/bb?target=818468a1bfad492599706dafa106d579&params=%7B%7D'
            target='_blank'
            rel='noopener noreferrer'
          >
            this
          </a>
          .
        </p>
        <h1>
                  <Image
                    priority
                    src='/../public/images/somei3.jpg'
                    //className={utilStyles.borderCircle}
                    height={144}
                    width={500}
                    //alt={name}
                  />
                </h1>
                <div className={styles.header2}>
                  <div>Members→</div>
      <div>
     <a href='posts/3401'>3401?  </a>
     </div>
        <p>or</p>
        <p>
     <a href='posts/3402'>3402?  </a>
        </p>
        <p>or</p>
        <p>
     <a href='posts/3403'>3403?  </a>
        </p>
        <p>or</p>
        <p>
     <a href='posts/3404'>3404?  </a>
        </p>
         <p>or</p>
        <p>
     <a href='posts/3405'>3405?  </a>
        </p>
        <p>or</p>

     <a href='posts/3406'>3406?  </a>


        </div>






        <p>
          Go to <a href='posts/first-post'>My 1st Demo Page</a>?
        </p>
        <p>
          Go to <a href='posts/second-post'>My 2nd Demo Page</a>?
        </p>
      </section>
    </Layout>
  );
}
