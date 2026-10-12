import Image from "next/image";
import Link from "next/link";
import { stickers } from "@/assets/stickers";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import styles from "@/components/Prose.module.css";

export default function NotFound() {
  return (
    <SiteLayout>
      <Seo title="Page not found" />
      <section className="section">
        <div className="wrap">
          <Image
            src={stickers.leapingCat}
            alt=""
            sizes="220px"
            style={{ width: "min(220px, 50vw)", height: "auto", marginBottom: "2rem" }}
          />
          <div className="section-head">
            <span className="pill">404</span>
            <h1 className={styles.title}>This page wandered off.</h1>
            <p className="lead">
              It might have moved, or it never existed. Let’s get you back somewhere useful.
            </p>
          </div>
          <Link className="btn btn-orange" href="/">
            Back to the homepage
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
