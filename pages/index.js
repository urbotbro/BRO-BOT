import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from './Hero'
import Card from './Card'

import Hero8 from './Hero8'
import Hero9 from './Hero9'

import Footer from '@/components/Footer'
import Hero10 from './Hero10'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <Navbar />
  <div className="video-container">
   <video width='100%'
    height='100%' 

     preload='auto'
     autoplay = 'autoplay'
     loop muted playsInline>
  <source src="https://i.imgur.com/pjL1BDp.mp4" type="video/mp4" />
</video>
  </div>

  
  <Hero />
  <Card />
  <Hero10 />
  <Hero8 />
  <Hero9 />
  <Footer />


 
    


  </>
  )
}
