import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Loader from '../components/Loader'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VanKlas-2.0</title>
        <meta name="description" content="Explore and find your fitness class" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home</h1>
      <Loader show ></Loader>

    </div>
  )
}
