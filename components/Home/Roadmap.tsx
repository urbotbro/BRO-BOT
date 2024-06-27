'use client';
import { Flex, Heading, SimpleGrid, Button } from "@chakra-ui/react"
import { RoadmapCard } from "../Card";
import { Orbitron } from "next/font/google";
import glitch from '@/components/Home/glitch.module.css'
import Link from "next/link";


const orbitronFont = Orbitron({weight: ['400', '500', '600', '700'], subsets: ['latin']})

const Roadmap = () => {
  const journeyAhead = [
    {
      title: "Phase 1 - Early Stage",
      phases: [
        {
          subTitle: ' KYC & Audit ',
          desc: null,
        },
        {
          subTitle: 'AMA with the community',
          desc: null,
        },
        {
          subTitle: 'Airdrops announced',
          desc: null,
        },
        {
          subTitle: 'Competition Rewards',
          desc: null,
        },
      ]
    },
    {
      title: "Phase 2- Presale Duration",
      phases: [
        {
          subTitle: 'Release utility 1',
          desc: 'Sniper Bot',
        },
        {
          subTitle: 'Release utility 2',
          desc: 'signal Bot',
        },
        {
          subTitle: 'Announcing NFT winners',
          desc: null,
        },
       {
          subTitle: 'Airdropping tokens',
          desc: null,
        },
      ]
    },
    {
      title: "Phase 3- Launch week",
      phases: [
        {
          subTitle: 'Earn with referrals',
          desc: null,
        },
        {
          subTitle: 'Launching on all Dexs',
          desc: null,
        },
        {
          subTitle: 'Releasing the 3 NFT types',
          desc: null,
        },
       {
          subTitle: 'Getting fast track Cexs, CMC and Coingecko listing enquiries',
          desc: null,
        },
      ]
    },
     {
      title: "Phase 4- Maturity",
      phases: [
        {
          subTitle: 'Releasing Trading Pools',
          desc: null,
        },
        {
          subTitle: 'Allowing NFTs minting ',
          desc: null,
        },
        {
          subTitle: 'Releasing other utilities etc',
          desc: null,
        },
      ]
    },
  ]

  return (
    <Flex mt='150px' mb='150px' width="100%" maxW='1280px' flexDirection='column' justify='center' align='center' id="roadmap">
      <Heading alignSelf='center' ml='20px' mt='50px' mb='50px' style={orbitronFont.style} className={glitch.glitchWapper}>
        <span className={glitch.glitch} data-text='Roadmap'>Roadmap</span>
      </Heading>
      <SimpleGrid columns={{base: 1, md: 2}} spacing={{base: 2, md: 15 }}>
        {journeyAhead.map(elem => 
          <RoadmapCard key={journeyAhead.indexOf(elem)} phases={elem.phases} title={elem.title} />
        )}
       </SimpleGrid>
       <Button
         as="a"
         href="/BRO Whitepaper.pdf"
         target="_blank"
         fontSize="18px"
         background="#fda007" // Set the default background color
         _hover={{
            background: '#fda007' // Keep the hover color the same
        }}
       rel="noopener noreferrer"
      >
       Whitepaper
     </Button>

    </Flex>
  )
}

export default Roadmap
