import { steps } from "@/content/process";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section className={`section ${styles.section}`} id="process">
      <div className="wrap">
        <div className="section-head">
          <h2>How a project runs</h2>
          <p className="lead">
            A small studio with a short feedback loop. Four steps, and you know where you stand at
            every one of them.
          </p>
        </div>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.n} aria-hidden="true">
                {index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
