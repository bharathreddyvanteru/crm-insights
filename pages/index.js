import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Best CRM software and Insights</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="9LJu7LRuJzI5vVpqC1eehiIy4UT-NhLyORPxVnLtG3c" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to CRM Insights!
        </h1>

        <p className={styles.description}>
          Checkout this space to know latest updates on CRM softwares and insights in implementing a good CRM system in a organisaiton.
          To understand questions around what is a CRM and latest trends on CRM softwares checkout this 
          <a href="https://techcentred.com/top-5-best-crm-software-for-every-business/"> best crm softwares </a> guide.
        </p>
      </main>
    </div>
  )
}
