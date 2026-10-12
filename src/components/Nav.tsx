import Image from "next/image";
import Link from "next/link";
import { stickers } from "@/assets/stickers";
import { studio } from "@/content/studio";
import styles from "./Nav.module.css";

const links = [
  { href: "/#why", label: "Why us" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#studio", label: "Studio" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`wrap ${styles.inner}`}>
        <Link className={styles.brand} href="/" aria-label={`${studio.name} home`}>
          <Image src={stickers.ocmBadge} alt={studio.name} sizes="74px" loading="eager" />
        </Link>
        <nav className={styles.links} aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className={`btn btn-orange btn-sm ${styles.cta}`} href="/#start">
          Start a project{" "}
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </header>
  );
}
