import Link from "next/link";
import { studio } from "@/content/studio";
import styles from "./Footer.module.css";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div>
          <p className={styles.brand}>{studio.name}</p>
          <p>
            © {year} {studio.legalName}
          </p>
          <p className={styles.muted}>{studio.location} · Independent software studio</p>
        </div>
        <div className={styles.links}>
          <Link href="/support">Support</Link>
          <Link href="/privacy">Privacy</Link>
          <a href={`mailto:${studio.email}`}>Email</a>
          <a href={studio.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#main">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
