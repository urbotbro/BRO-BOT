'use client';
import { Flex, Box, Text, Image as ChakraImage, Heading, Badge, Tooltip, Link } from "@chakra-ui/react";
import { FaTelegram, FaGlobe, FaRocket, FaAppStore, FaGooglePlay, FaTwitter } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import glitch from "@/components/Home/glitch.module.css";

const HomePage = () => {
  return (
    <>
      <Flex as='section' width='100%' justify='center' align='center' py='40px'>
        <Box width="100%" maxWidth="1280px" display='flex' flexDirection={{ base: 'column-reverse', md: 'row' }} justifyContent='center' alignItems="center" minH='700px'>
          <Box width={{ base: '100%', md: "60%" }} textAlign={{ base: 'center', md: 'left' }} p='20px'>
            <Heading as='h1' size='xl' mb='4' className={glitch.heroContainer}>
              BRO BOT: Your Ultimate Trading Ally
            </Heading>
            <Text fontSize='lg'>
              Harness the unmatched power of the BRO BOT to dominate the trading landscape.
            </Text>
          </Box>
          <Box flexShrink={0} mt={{ base: '20px', md: '0' }} display='flex' justifyContent='center' alignItems='center'>
            <ChakraImage src='/GIF.gif' alt="BroBot Logo" boxSize='350px' />
          </Box>
        </Box>
      </Flex>

      <Box mt={{ base: '50px', md: '100px' }} px='20px'>
        <Flex justify='center' wrap='wrap' maxWidth='1280px' mx='auto'>
          {/* Example Box for BRO BOT with FaTelegram */}
          <Box textAlign='center' p='5' m='2' bg='blue.500' borderRadius='md'>
            <FaTelegram size='50px' />
            <Text mt='2'>BRO BOT</Text>
            <Badge colorScheme='green'>Available</Badge>
          </Box>
          {/* Repeat similar structure for other icons and descriptions */}
        </Flex>
      </Box>
    </>
  );
};

export default HomePage;
