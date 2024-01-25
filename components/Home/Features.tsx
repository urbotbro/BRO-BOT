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
    },
    {
      title: "🎯 Auto Sniping",
      description: "With our advanced algorithms, snipe new tokens the moment they hit the market, ensuring you're always ahead of the crowd."
    },
    {
      title: "💼 Manual Buying & Selling",
      description: "Full control in your hands. Decide when to buy or sell based on the impeccable signals provided by BRO Bot."
    },
    {
      title: "⚙️ Limit Orders Perfected",
      description: "Set your buy and sell limits with precision:"
    },
    {
      title: "🚧 Unlaunched Token Orders:",
      description: "Why wait for the launch? Position yourself early by setting orders for tokens even before they launch."
    }
  ]


  return (
    <Flex width="100%" maxWidth='1280px' mt='150px' mb='150px' justify='center' align='center' flexDirection='column'>
      <Heading alignSelf='flex-start' ml='20px' mt='50px' mb='50px' style={orbitronFont.style} className={glitch.glitchWapper}>
        <span className={glitch.glitch} data-text='Features'>Features</span>
      </Heading>
      <SimpleGrid as={motion.div} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1.5}}}   columns={{base: 1, sm: 2,  md: 3}} spacing={6}>
        {mainFeatures.map(elem => <Card key={mainFeatures.indexOf(elem)} title={elem.title} description={elem.description} />)}
      </SimpleGrid>
    </Flex>
  )
}

export default Features