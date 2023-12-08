import React from 'react'
import Image from 'next/image'
import LOGO from '../public/Logo.PNG'
const Hero2 = () => {
  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="lg:col-span-5 lg:flex">
        <Image src={LOGO} className='w-70' alt="Logo" />
    </div>
    <div className="lg:col-span-7 ml-10">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-white">BRO Rewards for Bot Users</h1>
        <p className="max-w-2xl mb-6 mt-10 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Introducing an enticing incentive in our ecosystem: BRO Boost! Fancy being rewarded for transactions you were already going to make? Here&apos;s your chance! Every trade you execute through our bot adds to your volume, and a portion of this gets credited back to you in $BRO tokens (which also qualifies for the revenue share). Over time, this simple act can accumulate into a substantial reward. This seamless process naturally turns our bot users into token holders, and subsequently, potential investors.
        </p>
    </div>
</div>


  )
}

export default Hero2
