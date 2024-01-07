import Image from 'next/image'
import { Inter } from 'next/font/google'
import BigHeadline from '@/components/BigHeadline'
import CoolListEffect from '@/components/CoolListEffect'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <BigHeadline
    children="Your new design partner"
    />
    <CoolListEffect/>
   </div>
  )
}
