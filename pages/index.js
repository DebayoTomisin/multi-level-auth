import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { useAppContext } from "../src/utils/context";

export default function Home() {
  const router = useRouter();

  const { state } = useAppContext();

  useEffect(() => {
    if (state?.isLogged == false) {
      router.push("/login");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Authentizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Authentizer</h1>

        <p>Built by Olatubosun Sulaiman(Surry Alago)</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
