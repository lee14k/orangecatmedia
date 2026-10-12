import { studio } from "@/content/studio";
import styles from "./Marquee.module.css";

function Run() {
  return (
    <span>
      {studio.marquee.map((item) => (
        <span key={item}>
          {item}
          <i>✦</i>
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        <Run />
        <Run />
      </div>
    </div>
  );
}
