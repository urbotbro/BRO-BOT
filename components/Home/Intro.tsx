'use client';
import { Flex, Box, Text, Image as ChakraImage } from "@chakra-ui/react";
import Image from "next/image";


const Intro = () => {
  return (
    <Flex as='section'>
        <Box>
            <Text>
                BRO Bot: Your Ultimate Trading Ally
            </Text>
            <Text>
                Harness the unmatched power of the BRO Bot to dominate the trading landscape
            </Text>
        </Box>
        <Box>
            <ChakraImage src='/GIF.gif' alt="BroBot Logo" width="50px"/>
            {/* <Image src='/GIF.gif' alt="BroBot Image" width={50} height={50} /> */}
        </Box>

    </Flex>
  )
}

export default Intro