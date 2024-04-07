import Image from "next/image";
import { Poppins } from "next/font/google";
import BigHeadline from "@/components/BigHeadline";
import CoolListEffect from "@/components/CoolListEffect";
import LayoutWithSidebar from "@/components/LayoutWithSidebar";
import TripleRowBox from "@/components/TripleRowBox";
import Temp from "@/components/Temp";
import IdentityBox from "@/components/IdentityBox";
import CustomerBox from "@/components/CustomerBox";
import FAQ from "@/components/FAQ";
import PortfolioBox from "@/components/PortfolioBox";
import ImageGallery from "@/components/ImageGallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { StylizedImage } from "@/components/StylizedImage";
import imageLaptop from "/Users/kailee/orangecatmedia/public/laptop.jpg";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div className="homewrapper rounded-4xl bg-neutral-950">
      <div>
        <FadeIn>
          <BigHeadline />
        </FadeIn>
        <div className="my-16">
          <IdentityBox />
        </div>
        <FadeInStagger>
          <CustomerBox />
        </FadeInStagger>

        <div>
          <PortfolioBox />
        </div>
        <LayoutWithSidebar />
        <FAQ />
        <div>
          <ContactForm />
        </div>
      </div>
      <Footer />
     { /*<StylizedImage
        src={imageLaptop}
        sizes="(min-width: 1024px) 41rem, 31rem"
        className="justify-center lg:justify-end"
      />*/}
    </div>
  );
}

