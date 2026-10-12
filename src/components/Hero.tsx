import Image from "next/image";
import { Fragment } from "react";
import { stickers } from "@/assets/stickers";
import { studio } from "@/content/studio";
import { clientWork } from "@/content/work";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="wrap">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h1>
              Apps and platforms, shipped <span className="mark">on time</span> and{" "}
              <span className="mark mark-lime">on budget</span>
            </h1>
            <p className={styles.sub}>
              <strong>{studio.name}</strong> is an independent software studio in{" "}
              {studio.locationLong}. We design and build mobile apps, booking and membership
              platforms, and the systems behind them, and you work directly with the engineer from
              the first call to launch day and beyond.
            </p>
            <div className={styles.ctas}>
              <a className="btn btn-orange" href="#start">
                Tell us about your project{" "}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a className="btn" href="#work">
                See the work
              </a>
            </div>
          </div>
          <div className={styles.art} aria-hidden="true">
            <div className={styles.disc} />
            <Image
              className={styles.kitty}
              src={stickers.kitty}
              alt=""
              sizes="(max-width: 860px) 280px, 370px"
              loading="eager"
            />
            <Image className={styles.computer} src={stickers.computer} alt="" sizes="160px" />
            <div className={`${styles.sticker} ${styles.stickerA}`}>
              <b>$130K+</b>
              <span>a year earned on platforms we built</span>
            </div>
            <div className={`${styles.sticker} ${styles.stickerB}`}>
              <b>1:1</b>
              <span>with your engineer</span>
            </div>
          </div>
        </div>

        <dl className={styles.proof}>
          {studio.stats.map((stat) => (
            <div key={stat.label} className={styles.proofItem}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>

        <p className={styles.clients}>
          Built for{" "}
          {clientWork.map((item) => (
            <Fragment key={item.id}>
              <strong>{item.title}</strong>
              <span className={styles.sep} aria-hidden="true">
                ✦
              </span>
            </Fragment>
          ))}
          <strong>hospitality clients</strong>
        </p>
      </div>
    </section>
  );
}
