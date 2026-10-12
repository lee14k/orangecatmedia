import Link from "next/link";
import { studio } from "@/content/studio";
import styles from "./Nav.module.css";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#studio", label: "Studio" },
  { href: "/support", label: "Support" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.side}>
          <Link href="/#services">Services</Link>
          <Link href="/#work">Work</Link>
        </div>
        <Link className={styles.brand} href="/">
          {studio.name.toUpperCase()}
        </Link>
        <div className={styles.sideRight}>
          <Link className={styles.desktopOnly} href="/support">
            Support
          </Link>
          <Link className={styles.cta} href="/#contact">
            Start a project →
          </Link>
        </div>
      </div>
      <nav className={`wrap ${styles.mobile}`} aria-label="Primary">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
