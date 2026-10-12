import Image from "next/image";
import { stickers } from "@/assets/stickers";
import { studio } from "@/content/studio";
import styles from "./Hero.module.css";

const colorClass = {
  orange: styles.orange,
  teal: styles.teal,
  pink: styles.pink,
} as const;

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <p className={`${styles.kicker} fade-up`}>
            {studio.location} · independent software studio
          </p>
          <p className={`${styles.intro} fade-up fade-up-delay-1`}>
            {studio.name} designs and builds
          </p>
          <h1 className={`${styles.roles} fade-up fade-up-delay-2`}>
            {studio.roles.map((role) => (
              <span key={role.label} className={colorClass[role.color]}>
                {role.label}
              </span>
            ))}
          </h1>
          <p className={`${styles.specialty} fade-up fade-up-delay-3`}>{studio.specialty}</p>
          <p className={styles.tagline}>{studio.tagline}</p>
          <div className={styles.actions}>
            <a className="btn btn--orange" href="#contact">
              Start a project
            </a>
            <a className="btn btn--ghost" href="#work">
              See our work ↓
            </a>
          </div>
          <dl className={styles.stats}>
            {studio.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className={styles.visual}>
          <Image
            className={styles.sticker}
            src={stickers.ocmBadge}
            alt={`${studio.name} logo`}
            sizes="(max-width: 860px) 240px, 340px"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
