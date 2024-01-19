import Image from 'next/image'
import { Poppins } from 'next/font/google'
import BigHeadline from '@/components/BigHeadline'
import CoolListEffect from '@/components/CoolListEffect'
import LayoutWithSidebar from '@/components/LayoutWithSidebar'
import TripleRowBox from '@/components/TripleRowBox'
import Temp from '@/components/Temp'
import IdentityBox from '@/components/identitybox'
import CustomerBox from '@/components/CustomerBox'
import FAQ from '@/components/FAQ'
import PortfolioBox from '@/components/PortfolioBox'
const poppins = Poppins({   weight: '400',
subsets: ['latin'],})

export default function Home() {
  return (
    <div className="homewrapper">
   <div>
    <BigHeadline children="Orange Cat Media"/>
    <IdentityBox/>
    <CustomerBox/>
    <PortfolioBox/>
    <TripleRowBox
    headOne="filler"
    headTwo="filler"
    headThree="filler"
    spanOne="filler"
    spanTwo="filler"
    spanThree="filler"/>
    <LayoutWithSidebar/> 
    <FAQ/>
</div>
</div>
  )
}
