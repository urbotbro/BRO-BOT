import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { Card } from "../Card";
import { Ubuntu, Orbitron } from "next/font/google";
import { motion } from 'framer-motion';
import glitch from '@/components/Home/glitch.module.css'

const ubuntuFont = Ubuntu({weight: ['300', '400', '500', '700'], subsets: ['latin']})
const orbitronFont = Orbitron({weight: ['400', '500', '600', '700'], subsets: ['latin']})

const Features = () => {
  const mainFeatures = [
    {
      title: "🚀 Prime Signals",
      description: "Our core promise is delivering the best trading signals in the industry. We're not just another trading bot; we are THE benchmark when it comes to accurate and timely signals.",
      detail: null
    },
    {
      title: "🎯 Auto Sniping",
      description: "With our advanced algorithms, snipe new tokens the moment they hit the market, ensuring you're always ahead of the crowd.",
      detail: null
    },
    {
      title: "💼 BroSwift Swaps",
      description: "Where security meets speed, ensuring your transactions are not just rapid but also shielded from potential attacks, making every swap a winning move for you.",
      detail: null
    },
    {
      title: "⚙️ Limit Orders Perfected",
      description: "Set your buy and sell limits with precision:",
      detail: ["Buy Limits: Decide how much ETH to spend with adjustable slippage.", "Sell Limits: Fine-tune your strategy with options like take profit, stop loss, trailing stop loss, and tailored slippage."],
    },
    {
      title: "Copytrade",
      description: "Let others do the heavy lifting. Copytrade a profitable trader, or multiple traders simultaneously, while enjoying the same safety features as you would when trading with BRO BOT.",
      detail: null
    },
    {
      title: "🛡️FortifyShield",
      description: "Where every trade is guarded by our robust anti-rug and reorg protection, ensuring 90% success rate, Trade with confidence, trade with FortifyShield.",
      detail: null
    },
    {
      title: "RugGard Pro",
      description: "Unmatched protection from scams and honeypots. Banish uncertaintied with out BanBan Shield, fortified with cutting-edge SafeSim tech for fail-safe trading.",
      detail: null
    },
  ]


  return (
    <Flex width="100%" maxWidth='1280px' mt='150px' mb='150px' justify='center' align='center' flexDirection='column' pl='20px' pr='20px' id='features'>
      <Heading alignSelf='flex-start' ml='20px' mt='50px' mb='50px' style={orbitronFont.style} className={glitch.glitchWapper}>
        <span className={glitch.glitch} data-text='Features'>Features</span>
      </Heading>
      <SimpleGrid columns={{base: 1, md: 2,  lg: 2, xl: 3}} spacing={6}>
        {mainFeatures.map(elem => <Card key={mainFeatures.indexOf(elem)} title={elem.title} description={elem.description} detail={elem.detail} />)}
      </SimpleGrid>
    </Flex>
  )
}

export default Features