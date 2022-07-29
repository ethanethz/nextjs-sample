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

<h1>3402 Kujo Sena</h1>
<Image
                    priority
                    src='/../public/images/mili.jpg'
                    //className={utilStyles.borderCircle}
                    height={270}
                    width={400}
                    //alt={name}
                  />
<div className={styles.header2}>
<Layoutp>
</Layoutp>
<h2>
        <div>31</div>
        <div>Istanbul,Turkey</div>
        <div>Smelling shoes</div>
        <div>Wiper of high building</div>
        <div>I can buy you!!</div>

      </h2>
      </div>


      </section>
    </Layout>
  );
}
