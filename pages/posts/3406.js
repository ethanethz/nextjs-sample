import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
//import Styles from '../components/layout.module.css';
import Layoutp from '../../components/layout-profile';
import Image from 'next/image';
import styles from '../../components/layout.module.css';

export default function Home() {
  return (
    <Layout >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section clssassName={utilStyles.headingMd}>

      <h1>3405 Final Exam Taisei</h1>
      <Image
                    priority
                    src='/../public/images/slum.jpeg'
                    className={utilStyles.borderCircle}
                    height={320}
                    width={400}
                    //alt={name}
                  />
<div className={styles.header2}>
<Layoutp>
</Layoutp>
<h2>
        <div>99^99</div>
        <div>Universe</div>
        <div>Ruling the world</div>
        <div>Imitation</div>
        <div>I own all</div>
      </h2>
      </div>

      </section>
    </Layout>
  );
}