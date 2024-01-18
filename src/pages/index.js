import Image from 'next/image'
import { Inter } from 'next/font/google'
import BigHeadline from '@/components/BigHeadline'
import CoolListEffect from '@/components/CoolListEffect'
import LayoutWithSidebar from '@/components/LayoutWithSidebar'
import TripleRowBox from '@/components/TripleRowBox'
import Temp from '@/components/Temp'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className="tempcontainer justify-center flex-col items-center mb-0">
    <Temp/>
    <h1 className="text-white text-8xl pb-16 shadows">Coming Soon</h1>
</div>
  )
}
