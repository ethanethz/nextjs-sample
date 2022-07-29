import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Layoutp from '../../components/layout-profile';
//import Styles from '../components/layout.module.css';
import Image from 'next/image';
import styles from '../../components/layout.module.css';
export default function Home() {
  return (
    <Layout >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

<h1>3404 Ethan Gastric Acid </h1>
<Image
                    priority
                    src='/../public/images/me.png'
                    //className={utilStyles.borderCircle}
                    height={320}
                    width={250}
                    //alt={name}
                  />
<div className={styles.header2}>
<Layoutp>
</Layoutp>
<h2>
        <div>4</div>
        <div>Kremlin</div>
        <div>Joking</div>
        <div>Aizu-Anti-Facism</div>
        <div>Dawn is coming</div>
      </h2>
      </div>



      </section>
    </Layout>
  );
}
