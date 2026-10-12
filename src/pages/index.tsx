import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Principles } from "@/components/Principles";
import { Seo } from "@/components/Seo";
import { Services } from "@/components/Services";
import { SiteLayout } from "@/components/SiteLayout";
import { Studio } from "@/components/Studio";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <SiteLayout>
      <Seo />
      <Hero />
      <Principles />
      <Services />
      <Marquee text="APPS · PLATFORMS · APPS · PLATFORMS" tone="lime" />
      <Work />
      <Studio />
      <Faq />
      <Marquee text="START A PROJECT · START A PROJECT" tone="white" />
      <Contact />
    </SiteLayout>
  );
}
