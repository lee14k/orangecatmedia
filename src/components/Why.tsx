import { reasons } from "@/content/why";
import styles from "./Why.module.css";

export function Why() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="section-head">
          <h2>Why clients pick Orange Cat</h2>
          <p className="lead">
            You get a senior engineer who has built enterprise systems, and a small studio’s short
            feedback loop. No hand-offs, no surprises on the invoice, and someone who picks up after
            launch.
          </p>
        </div>
        <div className={styles.grid}>
          {reasons.map((reason) => (
            <article
              key={reason.id}
              className={reason.feature ? `${styles.card} ${styles.feature}` : styles.card}
            >
              <div className={styles.chip} aria-hidden="true">
                {reason.chip}
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
