'use client';
import { Box, Flex, Heading, Image } from "@chakra-ui/react"

const Signal = () => {
  return (
    <Flex width="100%" maxWidth='1280px' justify='center' mt='150px' mb='150px' align='center'>
      <Flex width="80%" justify='center' align='center'>
      <Box width='50%'>
        <Heading pt='20px' pb='20px'>Bro Signals</Heading>
        <Box>Navigate the dynamic world of cryptocurrency with Bro Signals – the ultimate signal bot that transforms volatility into opportunity. Designed for both novice traders and seasoned investors, Bro Signals harnesses the power of advanced analytics to provide real-time trading alerts, empowering you to make informed decisions with confidence.</Box>
      </Box>
      <Flex width='50%' justify='center' align='center'>
        <Image src="/gif2.gif" width="300px" alt="Trade Like Never Before" />
      </Flex>
      </Flex>
    </Flex>
  )
}

export default Signal