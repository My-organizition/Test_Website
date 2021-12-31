import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.PNG" />
      </Head>



      <div className={styles.topnav}>
        <a href=""> <Image width={50} height={50} src="/logo.PNG" alt="logo" ></Image></a>
        <div className={styles.div2}>
          <a href="home">Home</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
          <span className={styles.cercleProfil}><p className={styles.txt3}>Ar</p></span>
        </div>
      </div>

      <div className={styles.body}>

        <div className={styles.logohome}>

        </div>

        <p className={styles.p}>The Logo Above is Made in Pure CSS</p>
      </div>
      <footer className={styles.footer}>
        <div className={styles.div3} >
          <Image width={150} height={150} src="/logofooter.PNG" alt="logo" ></Image>
          <p className={styles.p1}>© All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  )
}
