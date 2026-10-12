import { Brief } from "@/components/Brief";
import { Closer } from "@/components/Closer";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Process } from "@/components/Process";
import { Seo } from "@/components/Seo";
import { Services } from "@/components/Services";
import { SiteLayout } from "@/components/SiteLayout";
import { Studio } from "@/components/Studio";
import { Why } from "@/components/Why";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <SiteLayout>
      <Seo />
      <Hero />
      <Marquee />
      <Why />
      <Work />
      <Services />
      <Process />
      <Studio />
      <Brief />
      <Faq />
      <Closer />
    </SiteLayout>
  );
}
