// intro.tsx
'use client';
import { Flex, Box, Text, Heading, Image as ChakraImage, Badge, Tooltip } from "@chakra-ui/react";
import { FaTelegram, FaGlobe, FaRocket, FaAppStore, FaGooglePlay, FaTwitter } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { Link } from "@chakra-ui/react";
import newHero from '@/components/Home/second.module.css';
import glitch from "@/components/Home/glitch.module.css";
import { Ubuntu, Orbitron } from "@chakra-ui/react";

const ubuntuFont = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });
const orbitronFont = Orbitron({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const Intro = () => {
  return (
    <Flex as='section' width='100%' justify='center' align='center' direction='column'>
      <Flex as='section' width="100%" direction={{ base: 'column-reverse', md: 'row' }} maxWidth="1280px" justifyContent='center' align="center" minH='700px' pl='20px' pr='20px'>
        <Box width={{ base: '100%', md: "60%" }} textAlign={{ base: 'center', md: 'start' }} display={{ base: 'flex', md: 'block' }} flexDirection={{ base: 'column' }}>
          <Heading fontSize={{ base: '33px', md: '40px', lg: '45px', xl: '55px' }} pb='20px' className={newHero.heroContainer} style={orbitronFont.style}>
            <Text className={`${newHero.glitch} ${newHero.hero} ${newHero.layers}`} data-text="BRO:Your Trading,Our Technology">BRO:Your Trading,Our Technology</Text>
          </Heading>
          <Text fontSize={{ base: '20px', md: '25px' }} mt={{ base: '20px', sm: "0" }} lineHeight={{ base: '160%', sm: 'initial' }} style={orbitronFont.style}>
            Your all-in-one crypto ecosystem. Launching, trading, and signals united under one hub - everything you need with Bro.
          </Text>
        </Box>
        <Box width={{ base: '90%', md: "40%" }} mt={{ base: '100px', md: '0' }} mb={{ base: '20px', md: '0' }} display={{ base: 'none', sm: 'flex' }} justifyContent='center' alignItems='center'>
          <ChakraImage src='/GIF.gif' alt="BroBot Logo" width="350px"/>
        </Box>
      </Flex>

      {/* Here we'll add the content from Webapp */}
      <Flex alignItems='center' justify={{ base: 'space-evenly', md: 'space-evenly' }} flexWrap='wrap' width='100%' mt='50px' maxWidth='1280px' pl='20px' pr='20px'>
        {/* Repeat for each icon */}
        {/* Example for BRO BOT */}
        <Link href="/#" display='flex' flexDirection={{ base: 'column', md: 'row' }} justifyContent='center' alignItems='center' _hover={{ textDecoration: 'none' }} background='#0088cc' padding='5px' borderRadius='5px' mr={{ base: '0', md: '15px' }}>
          <Box className={glitch.menu} height="85%" width={{ base: '30px', sm: '45px' }} pr={{ base: '0', md: '8px' }}>
            <FaTelegram />
          </Box>
          <Box display={{ base: 'flex', md: 'block' }} flexDirection='column' justifyContent='center' alignItems='center' mt={{ base: '5px', md: '0' }}>
            <Badge fontSize={{ base: '8px', sm: '11px' }} p='2px' borderRadius='5px'>Available</Badge>
            <Box fontSize={{ base: '11px', sm: '14', md: '17px' }} textTransform='uppercase' fontWeight='700' mt={{ base: '5px', md: '0' }}>BRO BOT</Box>
          </Box>
        </Link>
        {/* ... add the other icons in a similar manner ... */}
      </Flex>

      {/* Background from intro.tsx remains here */}
      <Box position='absolute' background={`url('/Video.gif') center no-repeat`} left='0' right='0' minH='800px' zIndex='-100' opacity='.1' mt='20px'>
      </Box>
    </Flex>
  )
}

export default Intro;
