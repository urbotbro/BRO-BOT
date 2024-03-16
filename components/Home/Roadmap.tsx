'use client';
import { Flex, Box, SimpleGrid } from "@chakra-ui/react"
import { RoadmapCard } from "../Card";

const Roadmap = () => {
  const journeyAhead = [
    {
      title: "Launch Day",
      phases: [
        {
          subTitle: 'Bro Bot Premieres',
          desc: 'Full Features & Earning Dashboard',
        },
        {
          subTitle: 'Signal Bot & Dashboard',
          desc: null,
        },
        {
          subTitle: 'Earn With Referrals',
          desc: null,
        },
      ]
    },
    {
      title: "Next",
      phases: [
        {
          subTitle: 'Beta',
          desc: 'Bro Trade Hub',
        },
        {
          subTitle: 'Bro Trade Hub goes Live',
          desc: null,
        },
        {
          subTitle: 'Bro Launchpad',
          desc: null,
        },
      ]
    }
  ]

  return (
    <Flex mt='150px' mb='150px' width="100%" maxW='1280px' justify='center' align='center' id="roadmap">
      <SimpleGrid columns={{base: 1, md: 2}} spacing={{base: 2, md: 15 }}>
        {journeyAhead.map(elem => 
          <RoadmapCard key={journeyAhead.indexOf(elem)} phases={elem.phases} title={elem.title} />
        )}
      </SimpleGrid>
    </Flex>
  )
}

export default Roadmap
