import Image from "next/image";
import { stickers } from "@/assets/stickers";
import { studio } from "@/content/studio";
import styles from "./Studio.module.css";

export function Studio() {
  return (
    <section className={`section ${styles.section}`} id="studio">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <p className="section__eyebrow">The studio</p>
          <h2 className="section__title">Who you’ll work with.</h2>
          <div className={styles.copy}>
            <p>
              {studio.name} is led by founder and engineer {studio.founder}. Kailee’s work spans
              multi-tenant insurance portals, enterprise scheduling platforms, finance-system
              integrations, and a consumer React Native app taken all the way through App Store
              release.
            </p>
            <p>
              Before software, Kailee worked in medical laboratory science — which left a lasting
              habit of measuring twice and explaining the why. Kailee is also working toward an
              M.S. in Computer Science at Georgia Tech.
            </p>
          </div>
          <dl className={styles.facts}>
            <div>
              <dt>Founder</dt>
              <dd>{studio.founder}</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{studio.location}</dd>
            </div>
            <div>
              <dt>Started in</dt>
              <dd>{studio.origin}</dd>
            </div>
          </dl>
          <a className="btn btn--ghost" href={studio.github} target="_blank" rel="noreferrer">
            Kailee on GitHub ↗
          </a>
        </div>
        <div className={styles.visual}>
          <Image
            className={styles.portrait}
            src={stickers.kaileeThumbs}
            alt={`Illustrated sticker of ${studio.founder} giving a thumbs up`}
            sizes="(max-width: 860px) 160px, 260px"
          />
          <Image className={styles.map} src={stickers.upperPeninsula} alt="" sizes="160px" />
        </div>
      </div>
    </section>
  );
}
