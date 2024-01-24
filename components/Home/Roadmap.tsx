'use client';
import { Flex, Box } from "@chakra-ui/react"

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
    <Flex>
      <Box>
      Roadmap
      </Box>
    </Flex>
  )
}

export default Roadmap