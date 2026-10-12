import Image from "next/image";
import { stickers } from "@/assets/stickers";
import styles from "@/components/Prose.module.css";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { studio } from "@/content/studio";

const LAST_UPDATED = "October 12, 2026";

export default function Privacy() {
  const email = <a href={`mailto:${studio.email}`}>{studio.email}</a>;

  return (
    <SiteLayout>
      <Seo
        title="Privacy Policy"
        description={`How ${studio.name} collects, uses, and protects information across our website and apps.`}
        path="/privacy"
      />
      <section className="section">
        <div className="wrap">
          <div className={styles.header}>
            <div className={styles.headCopy}>
              <span className="pill">Legal</span>
              <h1>Privacy Policy</h1>
              <p className={styles.updated}>Last updated: {LAST_UPDATED}</p>
            </div>
            <Image className={styles.sticker} src={stickers.kitty} alt="" sizes="140px" />
          </div>

          <div className={`${styles.sheet} ${styles.body}`}>
            <h2>Who we are</h2>
            <p>
              {studio.legalName} (“{studio.name},” “we,” “us”) is an independent software studio
              based in {studio.location}. This policy explains how we collect, use, and protect
              information when you visit our website, use apps we publish, or contact us
              (together, the “Services”).
            </p>
            <p>
              Please read this policy carefully. If you do not agree with it, please do not use the
              Services.
            </p>

            <h2>Information we collect</h2>
            <ul>
              <li>
                <strong>Information you give us.</strong> Your name and email address, and the
                project details you share in our project brief (such as your company, role,
                budget, and timeline), when you send us a brief or email us, plus anything you
                choose to include in a support request.
              </li>
              <li>
                <strong>Usage data.</strong> Our hosting provider automatically records standard
                server logs, such as IP address, browser type and version, the pages you request,
                and when you request them.
              </li>
              <li>
                <strong>Cookies and local storage.</strong> This website does not use advertising
                or analytics cookies. The project brief saves an unsent draft in your browser’s
                local storage so you don’t lose your progress. It stays on your device and is
                cleared when you send the brief.
              </li>
            </ul>

            <h2>Our apps</h2>
            <p>
              We design our apps to collect only what they need to work. Each app we publish on the
              App Store lists the data it collects, and how that data is used, in its App Privacy
              details on the App Store.
            </p>
            <p>
              When an app needs access to something like your camera, photos, or location, it asks
              for your permission first, and you can change that choice in your device settings at
              any time.
            </p>

            <h2>How we use information</h2>
            <ul>
              <li>To operate, maintain, and secure the Services.</li>
              <li>To respond to your messages and support requests.</li>
              <li>To communicate with you about a project or request you’ve contacted us about.</li>
              <li>To understand how the Services are used and improve them.</li>
            </ul>

            <h2>Sharing your information</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information
              to outside parties unless we provide you with advance notice.
            </p>
            <p>
              This does not include service providers who help us run the Services — such as our
              hosting provider and our email delivery provider — who receive only what they need to
              do that work. We may also disclose information when required by law.
            </p>

            <h2>How long we keep it</h2>
            <p>
              We keep project briefs, messages, and support requests for as long as we need them
              to respond and to maintain ordinary business records.
            </p>

            <h2>Your choices</h2>
            <p>
              You can ask us to access, correct, or delete personal information we hold about you
              by emailing {email}.
            </p>

            <h2>Security</h2>
            <p>
              We use commercially reasonable methods to protect your personal information, but no
              method of transmission over the internet or method of electronic storage is 100%
              secure.
            </p>

            <h2>Third-party websites</h2>
            <p>
              The Services may contain links to third-party websites. We are not responsible for
              the privacy practices or the content of those websites.
            </p>

            <h2>Children’s privacy</h2>
            <p>
              The Services are not intended for children under the age of 13, and we do not
              knowingly collect personal information from children under 13.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. When we do, we’ll post the new version
              on this page and update the “Last updated” date above.
            </p>

            <h2>Contact us</h2>
            <p>
              {studio.legalName}
              <br />
              {studio.location}
              <br />
              {email}
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
