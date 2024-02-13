import { Card, CardBody, CardHeader, Box, CardFooter, Button, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { Ubuntu, Orbitron } from "next/font/google";
import { motion } from 'framer-motion';
import glitch from '@/components/Home/glitch.module.css';

const ubuntuFont = Ubuntu({weight: ['300', '400', '500', '700'], subsets: ['latin']});
const orbitronFont = Orbitron({weight: ['400', '500', '600', '700'], subsets: ['latin']});

interface linkList {
  title: string;
  comingSoon: boolean;
  description: string;
  imgSrc: string;
  link: string;
}

export const FullLinkCard = (props: linkList) => 
  // Mapping titles to their new button texts
  const buttonTextMapping: { [key: string]: string } = {
    'BRO Sniper Bot': 'Available Launch Day',
    'BroTrade Hub': 'Coming Soon',
    'Dashboards': 'Available on Launch Day',
    'Bro Launchpads': 'Coming Soon',
  };

  // Determine the button text based on the card title
  const buttonText = buttonTextMapping[props.title] || `Open ${props.title}`;

   return (
    <Card minH='650px' ml='20px' mr='20px' mb='20px' background='#14191e' color='white' border='0.001px solid #ffffff23'>
      <CardBody>
        <Box display='flex' position='relative' justifyContent='center' alignItems='center' width="100%" minHeight="200px">
          <Box position='absolute' zIndex='10' display='flex' justifyContent='center' alignItems='center' width="100%" minHeight="200px" sx={{
            background: `url('${props.imgSrc}') center no-repeat`,
            backgroundSize: 'contain',
            filter: props.comingSoon ? 'blur(5px)' : 'none',
          }}></Box>
          {props.comingSoon && <Box as="span" zIndex="11" color="#ffffffab" style={orbitronFont.style}>Coming Soon</Box>}
        </Box>
        <Heading size='md' pt='30px' pb='30px' fontSize='30px' style={orbitronFont.style} className={glitch.glitchWrapper}>
          <span className={glitch.glitch} data-text={props.title}>{props.title}</span>
        </Heading>
        <Box pb='20px' fontSize='18px'>
          {props.description}
        </Box>
      </CardBody>
      <CardFooter alignItems='center'>
        {props.comingSoon ? (
          <Box opacity='.4' display='flex' alignItems='center'> Coming Soon</Box>
        ) : (
          <Button as={Link} href={props.link} fontSize="14px" borderRadius='50px' background='#cdf6f8' _hover={{
              background: '#9bf0f5',
            }}>
            {buttonText}
          </Button>
        )}
      </CardFooter>
    </ChakraCard>
  );
};
