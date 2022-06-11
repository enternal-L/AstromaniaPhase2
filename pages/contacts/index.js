import Head from 'next/head'
import Layout2 from '../../lib/layout2'
import styles2 from '../../styles/Layout.module.scss'

export default function Home() {
  return (
    <>
    <Head>
      <title>AstroMania</title>
    </Head>
    <main className={styles2.section}>
      <Layout2/>
      <section>
            <img src="../image/background/S__32268296.jpg"/>
      </section>
    </main>


    </>
  );

}