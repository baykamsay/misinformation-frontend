import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fact Fix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Fact Fix
        </h1>

        <p className={styles.description}>
          Analyze news articles and get a trust rating in seconds!
        </p>

        <form className={styles.grid}>
          <input className={styles.description}  style={{flexGrow: "2"}} type="text" placeholder="Enter article URL"/>
          <button className={styles.description} type="submit">Analyze</button>
        </form>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
