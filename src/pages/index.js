import Image from 'next/image'
import { Poppins } from 'next/font/google'
import BigHeadline from '@/components/BigHeadline'
import CoolListEffect from '@/components/CoolListEffect'
import LayoutWithSidebar from '@/components/LayoutWithSidebar'
import TripleRowBox from '@/components/TripleRowBox'
import Temp from '@/components/Temp'
import IdentityBox from '@/components/IdentityBox'
import CustomerBox from '@/components/CustomerBox'
import FAQ from '@/components/FAQ'
import PortfolioBox from '@/components/PortfolioBox'
import ImageGallery from '@/components/ImageGallery'
import ContactForm from '@/components/ContactForm'
import Footer from "@/components/Footer";
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const poppins = Poppins({   weight: '400',
subsets: ['latin'],})

export default function Home() {
  return (
    <div className="homewrapper">
      
   <div>
    <FadeIn>
    <BigHeadline />
    </FadeIn>
    <div className="my-16">
    <IdentityBox/>
    </div>
    <FadeInStagger>
    <CustomerBox/>
    </FadeInStagger>

    <div>
    <PortfolioBox/>
    </div>
    <LayoutWithSidebar/> 
    <FAQ/>
    <div>
    <ContactForm/>
    </div>
</div>
<Footer/>
</div>
  )
}
