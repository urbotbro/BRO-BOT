'use client';
import { Flex, Box, Text, Image as ChakraImage, Heading, Badge, Tooltip, Link } from "@chakra-ui/react";
import { FaTelegram, FaGlobe, FaRocket, FaAppStore, FaGooglePlay, FaTwitter } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import glitch from "@/components/Home/glitch.module.css";
import { Ubuntu, Orbitron } from "next/font/google";

const ubuntuFont = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });
const orbitronFont = Orbitron({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const HomePage = () => {
  return (
    <>
      <Flex as='section' width='100%' justify='center' align='center'>
        <Flex as='section' width="100%" direction={{ base: 'column-reverse', md: 'row' }} maxWidth="1280px" justifyContent='center' align="center" minH='700px' pl='20px' pr='20px'>
          <Box width={{ base: '100%', md: "60%" }} textAlign={{ base: 'center', md: 'start' }} display={{ base: 'flex', md: 'block' }} flexDirection={{ base: 'column' }}>
            <Heading fontSize={{ base: '33px', md: '40px', lg: '45px', xl: '55px' }} pb='20px' className={newHero.heroContainer}>
              <Text className={`${newHero.glitch} ${newHero.hero} ${newHero.layers}`} data-text="BRO BOT: Your Ultimate Trading Ally">BRO BOT: Your Ultimate Trading Ally</Text>
            </Heading>
            <Text fontSize={{ base: '20px', md: '25px' }} mt={{ base: '20px', sm: "0" }} lineHeight={{ base: '160%', sm: 'initial' }}>
              Harness the unmatched power of the BRO BOT to dominate the trading landscape.
            </Text>
          </Box>
          <Box width={{ base: '90%', md: "40%" }} mt={{ base: '100px', md: '0' }} mb={{ base: '20px', md: '0' }} display={{ base: 'none', sm: 'flex' }} justifyContent='center' alignItems='center'>
            <ChakraImage src='/GIF.gif' alt="BroBot Logo" width="350px" />
          </Box>
        </Flex>
        <Box position='absolute' background={`url('/Video.gif') center no-repeat`} left='0' right='0' minH='800px' zIndex='-100' opacity='.1' mt='20px'>
        </Box>
      </Flex>

      <Box mt={{ base: '100px' }} display='flex' flexDirection='column' alignItems="center" width="100%" maxWidth='1280px' pl='20px' pr='20px'>
        <Flex alignItems='center' justify={{ base: 'space-evenly', md: 'space-evenly' }} flexWrap='wrap' width='100%'>
          {/* All the Boxes for BRO BOT, Signal Bot, BroTrade Hub, etc. */}
          {/* Correct usage of FaTwitter instead of FaXTwitter */}
        </Flex>
      </Box>
    </>
  );
};

export default HomePage;
