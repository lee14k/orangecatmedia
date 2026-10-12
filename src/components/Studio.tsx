import Image from "next/image";
import { stickers } from "@/assets/stickers";
import { studio } from "@/content/studio";
import styles from "./Studio.module.css";

export function Studio() {
  return (
    <section className="section section-paper" id="studio">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.portrait} aria-hidden="true">
          <div className={styles.portraitBg} />
          <Image className={styles.kailee} src={stickers.kaileeThumbs} alt="" sizes="280px" />
          <Image className={styles.up} src={stickers.upperPeninsula} alt="" sizes="130px" />
        </div>
        <div className={styles.copy}>
          <h2>Who you’ll work with</h2>
          <p>
            <strong>
              {studio.name} is led by founder and engineer {studio.founder}.
            </strong>{" "}
            Kailee’s work spans multi-tenant insurance portals, enterprise scheduling platforms,
            finance-system integrations, and a consumer React Native app taken all the way through
            App Store release.
          </p>
          <p>
            Before software, Kailee worked in medical laboratory science, which left a lasting habit
            of measuring twice and explaining the why. Kailee is also working toward an M.S. in
            Computer Science at Georgia Tech.
          </p>
          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>Based in</dt>
              <dd>{studio.location}</dd>
            </div>
            <div className={styles.fact}>
              <dt>Started in</dt>
              <dd>{studio.origin}</dd>
            </div>
            <div className={styles.fact}>
              <dt>Studying</dt>
              <dd>M.S. CS, Georgia Tech</dd>
            </div>
          </dl>
          <a className="work-link" href={studio.github} target="_blank" rel="noreferrer">
            Kailee on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
