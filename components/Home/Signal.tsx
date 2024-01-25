'use client';
import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { Ubuntu } from "next/font/google";
import glitch from '@/components/Home/glitch.module.css'

const ubuntuFont = Ubuntu({weight: ['300', '400', '500', '700'], subsets: ['latin']})

const Signal = () => {
  return (
    <Flex width="100%" maxWidth='1280px' justify='center' mt='150px' mb='150px' align='center'>
      <Flex width="90%" justify='space-between' direction={{base: 'column-reverse', md: 'row'}} textAlign={{base:'center', md: 'start'}} align='center' background='#15212f' padding='30px 80px' borderRadius='10px'>
      <Box width={{base:'100%', md: '50%'}}>
        <Heading pt='20px' pb='20px' fontSize='40px' style={ubuntuFont.style} className={glitch.glitchWrapper}>
          <span className={glitch.glitch} data-text="Bro Signals">Bro Signals</span>
        </Heading>
        <Box fontSize='20px'>Navigate the dynamic world of cryptocurrency with Bro Signals – the ultimate signal bot that transforms volatility into opportunity. Designed for both novice traders and seasoned investors, Bro Signals harnesses the power of advanced analytics to provide real-time trading alerts, empowering you to make informed decisions with confidence.</Box>
      </Box>
      <Flex width={{base:'100%', md: '50%'}} justify='center' align='center'>
        <Image src="/gif2.gif" width="450px" alt="Trade Like Never Before" />
      </Flex>
      </Flex>
    </Flex>
  )
}

export default Signal