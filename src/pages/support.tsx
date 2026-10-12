import Image from "next/image";
import Link from "next/link";
import { stickers } from "@/assets/stickers";
import styles from "@/components/Prose.module.css";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { studio } from "@/content/studio";

export default function Support() {
  const email = <a href={`mailto:${studio.email}`}>{studio.email}</a>;

  return (
    <SiteLayout>
      <Seo
        title="Support"
        description={`Get help with ${studio.name} apps and projects.`}
        path="/support"
      />
      <section className="section">
        <div className="wrap">
          <div className={styles.header}>
            <div>
              <p className="section__eyebrow">Support</p>
              <h1 className="section__title">How can we help?</h1>
              <p className={`section__lede ${styles.lede}`}>
                Questions about an {studio.name} app, a project we built for you, or this website?
                Here’s how to reach us. We read every message and reply personally.
              </p>
            </div>
            <Image className={styles.sticker} src={stickers.paw} alt="" sizes="140px" />
          </div>

          <div className={styles.body}>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h2>Email support</h2>
                <p>The fastest way to reach us about an app or an existing project.</p>
                <p>{email}</p>
              </div>
              <div className={styles.card}>
                <h2>Start a project</h2>
                <p>Want to build something with us? Tell us about it on our contact form.</p>
                <p>
                  <Link href="/#contact">Go to the contact form →</Link>
                </p>
              </div>
            </div>

            <h2>App support</h2>
            <p>When you write in about one of our apps, these details help us help you faster:</p>
            <ul>
              <li>The app’s name and version</li>
              <li>Your device model and its iOS or iPadOS version</li>
              <li>What you expected to happen, what happened instead, and the steps to get there</li>
              <li>Screenshots or a screen recording, if you have them</li>
            </ul>

            <h2>Purchases and refunds</h2>
            <p>
              Purchases made through the App Store are processed by Apple. To request a refund, visit{" "}
              <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer">
                reportaproblem.apple.com
              </a>
              .
            </p>

            <h2>Data and privacy requests</h2>
            <p>
              To ask for a copy of, or the deletion of, personal information connected to one of our
              apps, email {email}. Our <Link href="/privacy">Privacy Policy</Link> explains what we
              collect and why.
            </p>

            <h2>Company details</h2>
            <p>
              {studio.legalName}
              <br />
              {studio.location}
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
