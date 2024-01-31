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
const poppins = Poppins({   weight: '400',
subsets: ['latin'],})

export default function Home() {
  return (
    <div className="homewrapper">
      
   <div>
    
    <BigHeadline />
    
    <div className="my-16">
    <IdentityBox/>
    </div>
    <CustomerBox/>
    <div>
    <PortfolioBox/>
    </div>
    <LayoutWithSidebar/> 
    <FAQ/>
    <div>
      <Image
      src=""
      />
    </div>
</div>
</div>
  )
}
