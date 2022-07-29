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

      <h1>3401 Eron Sotaro</h1>
      <Image
                    priority
                    src='/../public/images/waiter.jpeg'
                    className={utilStyles.borderCircle}
                    height={320}
                    width={250}
                    //alt={name}
                  />
                  <div className={styles.header2}>
<Layoutp>
</Layoutp>
<h2>
        <div>19</div>
        <div>Saitama</div>
        <div>Sho-hgi</div>
        <div>Tennis</div>
        <div>Nothing</div>
      </h2>
      </div>



      </section>
    </Layout>
  );
}