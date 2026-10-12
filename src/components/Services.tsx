import Image from "next/image";
import { stickers } from "@/assets/stickers";
import { services } from "@/content/services";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section className={`section ${styles.section}`} id="services">
      <div className="wrap">
        <div className={styles.header}>
          <div>
            <p className="section__eyebrow">Services</p>
            <h2 className="section__title">What we build.</h2>
            <p className="section__lede">
              From one focused app to a multi-tenant platform — scoped to what your business
              actually needs, and built to last past launch.
            </p>
          </div>
          <Image className={styles.sticker} src={stickers.computer} alt="" sizes="150px" />
        </div>
        <ol className={styles.list}>
          {services.map((service) => (
            <li key={service.id} className={styles.item}>
              <div className={styles.meta}>
                <span className={styles.number}>{service.number}</span>
                <span className={styles.kind}>{service.kind}</span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <div className={styles.badges}>
                  {service.badges.map((badge) => (
                    <span className="badge" key={badge}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
