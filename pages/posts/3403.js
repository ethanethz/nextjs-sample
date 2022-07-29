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
      <section className={utilStyles.headingMd}>

      <h1>3403 Yahn Yahn</h1>
      <Image
                    priority
                    src='/../public/images/pop.jpg'
                    className={utilStyles.borderCircle}
                    height={320}
                    width={250}
                    //alt={name}
                  />
<div className={styles.header2}>
<Layoutp>
</Layoutp>
<h2>
        <div>32</div>
        <div>Under the sea</div>
        <div>Shouting</div>
        <div>Swimming</div>
        <div>Don't kill me!</div>
      </h2>
      </div>

      </section>

    </Layout>
  );
}
