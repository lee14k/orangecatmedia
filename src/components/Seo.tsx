import Head from "next/head";
import { studio } from "@/content/studio";

// NEXT_PUBLIC_SITE_URL overrides the domain, e.g. for a staging deploy.
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || studio.siteUrl).replace(/\/$/, "");

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
};

export function Seo({ title, description = studio.description, path = "/" }: SeoProps) {
  const fullTitle = title ? `${title} — ${studio.name}` : `${studio.name} — Software Studio`;
  const url = siteUrl ? `${siteUrl}${path}` : undefined;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={studio.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      {url ? <link rel="canonical" href={url} /> : null}
      {url ? <meta property="og:url" content={url} /> : null}
      {siteUrl ? <meta property="og:image" content={`${siteUrl}/og.png`} /> : null}
    </Head>
  );
}
