import Image from "next/image";
import { stickers } from "@/assets/stickers";
import { clientWork, featuredWork, studioApps } from "@/content/work";
import styles from "./Work.module.css";

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}

const toneClass = {
  pink: styles.tonePink,
  teal: styles.toneTeal,
  orange: styles.toneOrange,
} as const;

export function Work() {
  return (
    <section className="section section-paper" id="work">
      <div className="wrap">
        <div className="section-head">
          <h2>Work that’s live and earning</h2>
          <p className="lead">
            Booking systems, membership sites and small-business web for clients across the Upper
            Midwest, plus our own apps, now in development.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={styles.feature}>
            <div className={styles.featureNum}>
              <b>{featuredWork.stat}</b>
              <span>{featuredWork.statLabel}</span>
            </div>
            <div className={styles.featureBody}>
              <span className="pill">Featured · {featuredWork.years}</span>
              <h3>{featuredWork.title}</h3>
              <p>{featuredWork.summary}</p>
              <Tags tags={featuredWork.tags} />
            </div>
          </article>

          {clientWork.map((item) => (
            <article
              key={item.id}
              className={`${styles.card} ${item.tone ? toneClass[item.tone] : ""}`}
            >
              <div className={styles.top}>
                {item.where ? <span className={styles.where}>{item.where}</span> : null}
                <h3>{item.title}</h3>
              </div>
              <div className={styles.body}>
                <p>{item.summary}</p>
                <Tags tags={item.tags} />
                {item.href ? (
                  <a className="work-link" href={item.href} target="_blank" rel="noreferrer">
                    Visit the site <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            </article>
          ))}

          <article className={`${styles.card} ${styles.apps}`}>
            <div className={styles.top}>
              <span className="pill pill-pink">{studioApps.status}</span>
              <h3>{studioApps.title}</h3>
            </div>
            <div className={styles.body}>
              <p>{studioApps.summary}</p>
              <Tags tags={studioApps.tags} />
            </div>
            <div className={styles.appsArt} aria-hidden="true">
              <Image src={stickers.yarn} alt="" sizes="92px" />
              <Image src={stickers.globe} alt="" sizes="92px" />
            </div>
          </article>
        </div>

        <div className={styles.midCta}>
          <p>Want yours on this list?</p>
          <a className="btn btn-ink" href="#start">
            Tell us about your project{" "}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
