import Image from "next/image";
import { useState } from "react";
import { stickers } from "@/assets/stickers";
import { work } from "@/content/work";
import styles from "./Work.module.css";

const filters = [
  { id: "all", label: "All" },
  { id: "client", label: "Client" },
  { id: "studio", label: "Studio" },
] as const;

type FilterId = (typeof filters)[number]["id"];

export function Work() {
  const [active, setActive] = useState<FilterId>("all");
  const visible = active === "all" ? work : work.filter((item) => item.kind === active);

  return (
    <section className={`section ${styles.section}`} id="work">
      <div className="wrap">
        <div className={styles.header}>
          <div>
            <p className="section__eyebrow">Work · selected</p>
            <h2 className="section__title">Platforms, sites, and apps in the wild.</h2>
            <p className="section__lede">
              Booking systems, membership sites, and small-business web for clients across the
              Upper Midwest — plus our own apps, now in development.
            </p>
          </div>
          <Image className={styles.sticker} src={stickers.globe} alt="" sizes="150px" />
        </div>

        <fieldset className={styles.filters}>
          <legend className="visually-hidden">Filter work</legend>
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={active === filter.id}
              className={active === filter.id ? styles.filterActive : styles.filter}
              onClick={() => setActive(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </fieldset>

        <div className={styles.list}>
          {visible.map((item) => (
            <article key={item.id} id={`work-${item.id}`} className={styles.item}>
              <div className={styles.meta}>
                {item.year ? <span>{item.year}</span> : null}
                {item.featured ? <span className={styles.featured}>Featured</span> : null}
                {item.status ? <span className={styles.status}>{item.status}</span> : null}
              </div>
              <div className={styles.body}>
                <h3>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.title} ↗
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p>{item.summary}</p>
                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span className="badge" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
