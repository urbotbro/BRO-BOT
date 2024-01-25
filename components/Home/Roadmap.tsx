'use client';
import { Flex, Box, SimpleGrid } from "@chakra-ui/react"
import { RoadmapCard } from "../Card";

const Roadmap = () => {
  const journeyAhead = [
    {
      title: "Kick-Start",
      phases: [
        {
          subTitle: 'Pulse Signals',
          desc: 'Alerts on hot pairs.',
        },
        {
          subTitle: 'Precision Orders',
          desc: 'Buy/Sell at just the right time.Alerts on hot pairs.',
        },
        {
          subTitle: 'Swift Auto Sell',
          desc: 'No delays, only profits.',
        },
      ]
    },
    {
      title: "Next Up",
      phases: [
        {
          subTitle: 'Web Gateway',
          desc: 'BRO BOT, now in your browser.',
        },
        {
          subTitle: 'Multi-Realm Trades',
          desc: 'Spanning across blockchains.',
        },
        {
          subTitle: 'Trade Insights',
          desc: 'Your trading, deciphered.',
        },
      ]
    },
    
    {
      title: "Horizon's Edge",
      phases: [
        {
          subTitle: 'Omni-Platform',
          desc: "From mobile to desktop, we've got you.",
        },
        {
          subTitle: 'Wallet Sentinel',
          desc: 'Every move, noted.',
        },
        {
          subTitle: 'Trade Mimicry',
          desc: 'Follow the masters, reap like them.',
        },
      ]
    },
    
  ]

  return (
    <Flex mt='150px' mb='150px' width="100%" maxW='1280px' justify='center' align='center' id="roadmap">
      <SimpleGrid columns={{base: 1, md: 2, xl:3}} spacing={2}>
        {journeyAhead.map(elem => 
          <RoadmapCard key={journeyAhead.indexOf(elem)} phases={elem.phases} title={elem.title} />
        )}
      </SimpleGrid>
    </Flex>
  )
}

export default Roadmap