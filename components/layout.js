import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "無趣味人";

export default function Layout({ children, home, title }) {
  const pageTitle = home ? `${siteTitle}` : `${title} - ${siteTitle}`;
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="CJのウェブサイト" />
        <title>{pageTitle}</title>
        <meta name="og:title" content={pageTitle} />
        <meta property="og:image" content="https://cjtheone.net/profile.png" />
        <meta name="twitter:card" content="summary" />
        <script
          data-goatcounter="https://cjtheone.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/profile.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={siteTitle}
            />
            <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/profile.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={siteTitle}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{siteTitle}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
      <footer>
        {/* <p className={`${styles.footNote} ${utilStyles.lightText}`}>
                    フッター
                </p> */}
        <p className={`${styles.copyRight} ${utilStyles.lightText}`}>
          ©2021 CJ
        </p>
      </footer>
    </div>
  );
}
