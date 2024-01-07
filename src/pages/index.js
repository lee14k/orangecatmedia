import Image from 'next/image'
import { Inter } from 'next/font/google'
import BigHeadline from '@/components/BigHeadline'
import CoolListEffect from '@/components/CoolListEffect'
import TripleRowBox from '@/components/TripleRowBox'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <BigHeadline
    children="Your new design partner"
    />
    <TripleRowBox
  headOne="Filler"
  headTwo="Filler"
  headThree="Filler"
  spanOne="Filler" 
  spanTwo="Filler"
  spanThree="Filler"
    />
    <CoolListEffect/>
   </div>
  )
}
