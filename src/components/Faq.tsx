import { faqs } from "@/content/faq";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section className="section" id="faq">
      <div className={`wrap ${styles.grid}`}>
        <div className={`section-head ${styles.head}`}>
          <h2>Good questions</h2>
          <p className="lead">Not sure your idea fits? Ask anyway.</p>
        </div>
        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <details key={faq.question} className={styles.item} open={index === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
