'use client';
import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { Ubuntu, Orbitron } from "next/font/google";
import glitch from '@/components/Home/glitch.module.css'

const ubuntuFont = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] })
const orbitronFont = Orbitron({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

const Signal = () => {
  return (
    <Flex width="100%" maxWidth='1280px' justify='center' mb='150px' align='center'>
      <Flex
        width={{ base: '90%', md: "90%" }}
        justify='space-between'
        direction={{ base: 'column-reverse', md: 'row' }}
        textAlign={{ base: 'center', md: 'start' }}
        align='center'
        background='#fda007'
        padding={{ base: '10px 10px', md: '30px 80px' }}
        borderRadius='10px'
      >
        <Box width={{ base: '100%', md: '50%' }}>
          <Heading
            pt='20px'
            pb='20px'
            fontSize={{ base: '25px', sm: '30', md: '40px' }}
            className={`${glitch.glitchWrapper} ${glitch.glitch}`}
            data-text="BRO Signals"
            color="black"
            style={orbitronFont.style}
          >
            PANDA BRO
          </Heading>
          <Box fontSize={{ base: '18px', md: '20px' }} color="black">Hey, my name is Bro, and I am a panda. I am not a normal panda though, I am not lazy nor am I clumsy. In fact, I am very active and smart. I am here to help you make money. The utilities I offer is next to none in this space. Browse the website to understand the difference between me, and other meme coins.</Box>
        </Box>
        <Flex width={{ base: '80%', md: '50%' }} justify='center' align='center'>
          <Image src="/pandaa.png" width="450px" alt="Trade Like Never Before" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Signal;
