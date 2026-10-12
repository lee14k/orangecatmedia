import { services } from "@/content/services";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head">
          <h2>What we build</h2>
          <p className="lead">
            From one focused app to a multi-tenant platform, scoped to what your business needs and
            built to last past launch.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.svc}>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <div className="tags">
                {service.badges.map((badge) => (
                  <span className="tag" key={badge}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
