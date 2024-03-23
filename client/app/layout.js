import Image from "next/image";
import localFont from "next/font/local";
import styles from "./layout.module.css";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "CitiWatch",
  description: "CitiWatch",
};

const missinaSans = localFont({ src: "./MessinaSans.ttf", weight: "" })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${styles.viewpage} ${missinaSans.className}`}>

          <div className={styles.sidebar}>
          
          
            {/* Navbar */}
            <div className={styles.navbar}>
              <Image
                className={styles.logo}
                src="/logo.svg"
                alt="CitiWatch"
                width={30}
                height={30}
              />
              <h2 className={styles.title}>CitiWatch</h2>
            </div>


            {/* Sidebar Links*/}
            <p className={styles.categoryLabel}>
              <Image height={18} width={18} alt="analytics" src="/verticallines.svg" className={styles.iconLabel}/>
              <Link href="/" className={styles.subSectionLabel}>
                Home
              </Link>
            </p>

            <p className={styles.categoryLabel}>
              <Image height={18} width={18} alt="analytics" src="/verticallines.svg" className={styles.iconLabel}/>
              <Link href="/report" className={styles.subSectionLabel}>
                Report
              </Link>
            </p>

            <p className={styles.categoryLabel}>
              <Image height={18} width={18} alt="analytics" src="/verticallines.svg" className={styles.iconLabel}/>
              <Link href="/find" className={styles.subSectionLabel}>
                Find
              </Link>
            </p>
          </div>

          <div className={styles.mainApp}>
            {children}
          </div>
          
        </body>
    </html>
  );
}
