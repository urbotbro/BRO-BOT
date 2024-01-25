import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from '@chakra-ui/next-js';
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { Ubuntu, Fira_Mono } from "next/font/google";
import glitch from '@/components/Home/glitch.module.css';
import newHero from'@/components/Home/second.module.css';

const ubuntuFont = Ubuntu({weight: '700', subsets: ['latin']})

const Footer = () => {
  const date = new Date();
  return (
    <Flex as='footer' justify='center' direction='column' align='center' bg='black' textAlign='center'>
      <Flex direction='column' as='div' width='100%' maxWidth='1280px' mt='150px' mb='150px' justify='center' align='center'>
        <Box width='220px'>
          <Image src='/GIF.gif' alt='Footer Logo' />
        </Box>
        {/* <Box mt='50px' fontSize='50px' fontWeight='700' mb='20px' letterSpacing='1.5px' className={glitch.glitchWrapper} style={ubuntuFont.style}>
          <span className={glitch.glitch} data-text="Start Trading with BRO BOT">Start Trading with BRO BOT</span>
        </Box> */}
        <Box mt='50px' fontSize={{base: '20px', md: '50px'}} fontWeight='700' mb='20px' letterSpacing={{base: '1px', md: '1.5px'}} className={newHero.heroContainer} style={ubuntuFont.style}>
          <span className={`${newHero.glitch} ${newHero.hero} ${newHero.layers}`} data-text="Start Trading with BRO BOT">Start Trading with BRO BOT</span>
        </Box>
        
        <Box>
          <Flex justify='center' align='center'>
            <Link href='/#' width='30px' height='30px' ml='10px' mr='10px' display='flex'justifyContent='center' alignItems="center" className={glitch.div}>
              <FaXTwitter />
            </Link>
            <Link href="/#" width='30px' height='30px' ml='10px' mr='10px' display='flex'justifyContent='center' alignItems="center" className={glitch.div}>
              <FaTelegram />
            </Link>
          </Flex>
        </Box>

      </Flex>
        <Box fontSize='12px' color="#ffffff68" mb='10px'>
          Copyright &copy;{date.getFullYear()} BRO BOT. All rights reserved.
        </Box>
    </Flex>
  )
}

export default Footer