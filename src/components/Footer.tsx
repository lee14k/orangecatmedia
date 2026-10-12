import Image from "next/image";
import Link from "next/link";
import { stickers } from "@/assets/stickers";
import { studio } from "@/content/studio";
import styles from "./Footer.module.css";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <Image className={styles.badge} src={stickers.ocmBadge} alt={studio.name} sizes="65px" />
        <span>
          © {year} {studio.legalName} · {studio.location} · Working with clients remotely
        </span>
        <span className={styles.links}>
          <Link href="/support">Support</Link>
          <Link href="/privacy">Privacy</Link>
          <a href={`mailto:${studio.email}`}>{studio.email}</a>
          <a href={studio.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="#main">Back to top ↑</a>
        </span>
      </div>
    </footer>
  );
}
