import Image from "next/image";
import { stickers } from "@/assets/stickers";
import { faqs } from "@/content/faq";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section className={`section ${styles.section}`} id="faq">
      <div className="wrap">
        <div className={styles.header}>
          <div>
            <p className="section__eyebrow">FAQ</p>
            <h2 className="section__title">Good questions.</h2>
          </div>
          <Image className={styles.sticker} src={stickers.yarn} alt="" sizes="120px" />
        </div>
        <div className={styles.list}>
          {faqs.map((faq) => (
            <details key={faq.question} className={styles.item}>
              <summary>
                <span>{faq.question}</span>
                <span className={styles.icon} aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
