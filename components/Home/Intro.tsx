'use client';
import { Flex, Box, Text, Image as ChakraImage, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
import newHero from'@/components/Home/second.module.css';

const ubuntuFont = Ubuntu({weight: ['300', '400', '500', '700'], subsets: ['latin']})

const Intro = () => {
  return (
    <Flex width='100%' justify='center' align='center'>
        <Flex as='section' width="100%" direction={{base: 'column-reverse', md: 'row'}} maxWidth="1280px" justifyContent='center' align="center" minH='700px' pl='20px' pr='20px'>
            <Box width={{base: '100%', md:"60%"}} textAlign={{base: 'center', md: 'start'}} display={{base: 'flex', md: 'block'}} flexDirection={{base: 'column'}}>
                <Heading fontSize={{base: '40px', md: '55px'}} pb='20px' className={newHero.heroContainer} style={ubuntuFont.style}>
                    <span className={`${newHero.glitch} ${newHero.hero} ${newHero.layers}`} data-text="BRO Bot: Your Ultimate Trading Ally">BRO Bot: Your Ultimate Trading Ally</span>
                </Heading>
                <Text fontSize='25px'>
                    Harness the unmatched power of the BRO Bot to dominate the trading landscape
                </Text>
            </Box>
            <Box width={{base: '100%', md:"40%"}} display='flex' justifyContent='center' alignItems='center'>
                <ChakraImage src='/GIF.gif' alt="BroBot Logo" width="350px"/>
                {/* <Image src='/GIF.gif' alt="BroBot Image" width={50} height={50} /> */}
            </Box>

        </Flex>
    </Flex>
  )
}

export default Intro