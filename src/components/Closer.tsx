import Image from "next/image";
import { stickers } from "@/assets/stickers";
import styles from "./Closer.module.css";

export function Closer() {
  return (
    <section className={styles.closer}>
      <div className={`wrap ${styles.inner}`}>
        <div>
          <h2>
            Got a project? Let’s see if we’re a <em>fit</em>
          </h2>
          <p>
            An app idea, a platform that’s outgrown its spreadsheets, or a codebase that needs a new
            home. Tell us about it and you’ll hear back from the engineer.
          </p>
        </div>
        <div className={styles.art}>
          <Image src={stickers.globe} alt="" sizes="150px" />
          <a className="btn" href="#start">
            Start a project{" "}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
