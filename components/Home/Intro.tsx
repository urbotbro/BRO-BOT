'use client';
import { Flex, Box, Text, Image as ChakraImage, Heading } from "@chakra-ui/react";
import Image from "next/image";


const Intro = () => {
  return (
    <Flex as='section' width="100%" maxWidth="1280px" justifyContent='center' align="center" minH='650px'>
        <Box width="60%">
            <Heading fontSize='55px' pb='20px'>
                BRO Bot: Your Ultimate Trading Ally
            </Heading>
            <Text fontSize='25px'>
                Harness the unmatched power of the BRO Bot to dominate the trading landscape
            </Text>
        </Box>
        <Box width="40%" display='flex' justifyContent='center' alignItems='center'>
            <ChakraImage src='/GIF.gif' alt="BroBot Logo" width="350px"/>
            {/* <Image src='/GIF.gif' alt="BroBot Image" width={50} height={50} /> */}
        </Box>

    </Flex>
  )
}

export default Intro