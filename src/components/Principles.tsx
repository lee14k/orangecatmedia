import Image from "next/image";
import { stickers } from "@/assets/stickers";
import { principles } from "@/content/principles";
import styles from "./Principles.module.css";

export function Principles() {
  return (
    <section className={`section ${styles.section}`} id="approach">
      <div className="wrap">
        <div className={styles.intro}>
          <div>
            <p className="section__eyebrow">How we work</p>
            <h2 className="section__title">A small studio with a short feedback loop.</h2>
            <p className={styles.lede}>
              No account managers or hand-offs — you talk to the people writing the code, from the
              first call through launch day and beyond.
            </p>
          </div>
          <Image className={styles.sticker} src={stickers.kitty} alt="" sizes="160px" />
        </div>
        <ol className={styles.list}>
          {principles.map((principle) => (
            <li key={principle.id} className={styles.item}>
              <span className={styles.number}>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
