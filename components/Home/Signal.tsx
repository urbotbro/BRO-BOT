'use client';
import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { Ubuntu, Orbitron } from "next/font/google";
import glitch from '@/components/Home/glitch.module.css'

const ubuntuFont = Ubuntu({weight: ['300', '400', '500', '700'], subsets: ['latin']})
const orbitronFont = Orbitron({weight: ['400', '500', '600', '700'], subsets: ['latin']})

const Signal = () => {
  return (
    <Flex width="100%" maxWidth='1280px' justify='center' mt='150px' mb='150px' align='center'>
      <Flex width={{base: '90%', md: "90%"}} justify='space-between' direction={{base: 'column-reverse', md: 'row'}} textAlign={{base:'center', md: 'start'}} align='center' background='#fda007' padding={{base: '20px 20px', md: '30px 80px'}} borderRadius='10px'>
      <Box width={{base:'100%', md: '50%'}} color="black">
        <Heading 
          pt='20px' 
          pb='20px' 
          fontSize={{ base: '25px', sm: '30', md: '40px' }} 
          style={{...orbitronFont.style, color: 'black !important'}}
          className={glitch.glitchWrapper}
        >
          <span 
            className={glitch.glitch} 
            data-text="Bro Signals" 
            style={{ color: 'black !important' }}
         >
            Bro Signals
          </span>
        </Heading>
        <Box fontSize='20px' color="black">Navigate the dynamic world of cryptocurrency with Bro Signals – the ultimate signal bot that transforms volatility into opportunity. Designed for both novice traders and seasoned investors, Bro Signals harnesses the power of advanced analytics to provide real-time trading alerts, empowering you to make informed decisions with confidence.</Box>
      </Box>
      <Flex width={{base:'100%', md: '50%'}} justify='center' align='center'>
        <Image src="/BRO SIGNAL BOT.png" width="450px" alt="Trade Like Never Before" />
      </Flex>
      </Flex>
    </Flex>
  )
}

export default Signal
