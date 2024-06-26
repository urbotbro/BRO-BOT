'use client';
import { Link as ChakraLink, Divider, Box, Button, Flex, Popover, PopoverBody, Badge, PopoverFooter, PopoverContent, PopoverHeader, PopoverTrigger, Portal } from '@chakra-ui/react'
import React, { useState, useRef, useEffect } from 'react';
import { Link, Image } from '@chakra-ui/next-js';
import { Ubuntu, Orbitron } from "next/font/google";
import { FaBars, FaXmark, FaTelegram } from 'react-icons/fa6';
import { FaChevronDown } from "react-icons/fa";
import glitch from '@/components/Home/glitch.module.css'
import tooltip from '@/components/Home/tooltip.module.css';
import Loader from './Home/loader';
const ubuntuFont = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] })
const orbitronFont = Orbitron({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

const Header = () => {
  const [tool, toggleTool] = useState(false);
  const [smallTool, toggleSmallTool] = useState(false);
  const [state, changeState] = useState(false);
  const toolRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (toolRef.current && !toolRef.current.contains(event.target as Node)) {
      toggleTool(false);
      toggleSmallTool(false);
    }
  };
  useEffect(() => {
   
  

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <Flex as='header' justifyContent='space-between' align='center' color='white' position='fixed' top='0' width="100%" zIndex='1000' pl='5px' pr='5px'>
      <Flex as='div' position='sticky' maxWidth='2280px' width="100%" justify='space-between' align='center' paddingTop='10px' paddingBottom='10px' pl='5px' pr='5px'>
        <Box>
          <Image src='/panda.png' alt="BRO" width={95} height={70} />
        </Box>


        <Box display={{ base: 'none', md: 'flex' }} justifyContent='space-between' alignItems='center'>
          <Link href='#get-started' pl='10px' pr='10px' fontSize='15px' style={orbitronFont.style} _hover={{ color: '#9bf0f5' }}>Getting Started</Link>
          <Link href='#features' pl='10px' pr='10px' fontSize='15px' style={orbitronFont.style} _hover={{ color: '#9bf0f5' }}>Features</Link>
          <Link href='#roadmap' pl='10px' pr='10px' fontSize='15px' style={orbitronFont.style} _hover={{ color: '#9bf0f5' }}>Roadmap</Link>
          <Link href='https://bro-bot-academy.gitbook.io/brobot' pl='10px' pr='10px' fontSize='15px' style={orbitronFont.style} _hover={{ color: '#9bf0f5' }} target="_blank">Tutorial</Link>
          <Link href='/BRO Whitepaper.pdf' pl='10px' pr='10px' fontSize='15px' style={orbitronFont.style} _hover={{ color: '#9bf0f5' }} target="_blank">Whitepaper</Link>
        </Box>

        <Box position='relative' display={{ base: 'none', md: 'block' }}>
          <Button borderRadius='100px' onClick={() => { toggleTool(!tool) }} style={orbitronFont.style} fontSize='14px' background='#fda007' _hover={{
            background: '#fda007'
          }}>
            <Box as='span' paddingRight='7px'>Start</Box> <FaChevronDown />
          </Button>
        </Box>
        <Box ref={toolRef} as='div' visibility={tool ? 'visible' : 'hidden'} zIndex={tool ? 1000 : 0} opacity={tool ? 1 : 0} transition={'all .2s ease-in-out'} flexDirection='column' minWidth='240px' background="#161c21" padding='10px' borderRadius='5px' right='10px' transform='translateY(85px)' position='absolute'>
          {/* <ChakraLink onClick={() => {toggleTool(false)}} as={Link} href='#' pt='10px' pb='10px' pl='5px' pr='5px' _hover={{textDecoration: 'none', background: '#1e262d'}} display='flex' alignItems='center'><Box className={glitch.menu} width='25px' height='25px'><FaTelegram /></Box> <Box as='span' ml='10px'>BRO BOT</Box></ChakraLink>
            <ChakraLink onClick={() => {toggleTool(false)}} as={Link} href='#' pt='10px' pb='10px' pl='5px' pr='5px' _hover={{textDecoration: 'none', background: '#1e262d'}} display='flex' alignItems='center'><Box className={glitch.menu} width='25px' height='25px'><FaTelegram /></Box> <Box as='span' ml='10px'>BRO SNIPER BOT</Box></ChakraLink>
          <Divider opacity='.1' />
             <ChakraLink onClick={() => {toggleTool(false)}} as={Link} href='#' pt='10px' pb='10px' pl='5px' pr='5px' _hover={{textDecoration: 'none', background: '#1e262d'}} display='flex' alignItems='center'><Box className={glitch.menu} width='25px' height='25px'><FaTelegram /></Box> <Box as='span' ml='10px'>Signal BOT</Box></ChakraLink> */}
          {/* <Divider opacity='.1' />
            <ChakraLink onClick={() => {toggleTool(false)}} as={Link} href='https://tradewithbro.com' pt='10px' pb='10px' pl='5px' pr='5px' _hover={{textDecoration: 'none', background: '#1e262d'}} display='flex' alignItems='center'><Box className={glitch.menu} width='25px' height='25px'><FaTelegram /></Box> <Box as='span' ml='10px'>BroTrade Hub</Box></ChakraLink>
          <Divider opacity='.1' />
             <ChakraLink onClick={() => {toggleTool(false)}} as={Link} href='https://tradewithbro.com/pages/launch.html' pt='10px' pb='10px' pl='5px' pr='5px' _hover={{textDecoration: 'none', background: '#1e262d'}} display='flex' alignItems='center'><Box className={glitch.menu} width='25px' height='25px'><FaTelegram /></Box> <Box as='span' ml='10px'>Bro Launchpad</Box></ChakraLink> */}
          <Box pt='10px' pb='10px' pl='5px' pr='5px' opacity='0.7' _hover={{ textDecoration: 'none' }} cursor='pointer' display='flex' alignItems='center'>
             <a href="#" target="_blank" rel="noopener noreferrer" className="sniperBotLink" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                <FaTelegram style={{ marginRight: '10px' }} />
                Sniper Bot
              </a><Badge variant='outline' justifySelf='flex-end' alignItems='center' display='flex' justifyContent='center' alignContent='center' ml='10px' colorScheme='green'>Soon</Badge>
            </Box>
            <Divider opacity='.1' />
            <Box pt='10px' pb='10px' pl='5px' pr='5px' opacity='0.7' _hover={{ textDecoration: 'none' }} cursor='pointer' display='flex' alignItems='center'>
              <a href="#" target="_blank" rel="noopener noreferrer" className="signalBotLink" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                 <FaTelegram style={{ marginRight: '10px' }} />
                 Signal Bot
               </a><Badge variant='outline' justifySelf='flex-end' alignItems='center' display='flex' justifyContent='center' alignContent='center' ml='10px' colorScheme='green'>Soon</Badge>
             </Box>
          <Divider opacity='.1' />
          <Box pt='10px' pb='10px' pl='5px' pr='5px' opacity='0.7' _hover={{ textDecoration: 'none', }} cursor='default' display='flex' alignItems='center'>
            BroTrade Hub <Badge variant='outline' justifySelf='flex-end' alignItems='center' display='flex' justifyContent='center' alignContent='center' ml='10px' colorScheme='green'>Soon</Badge>
          </Box>
          <Divider opacity='.1' />
          <Box pt='10px' pb='10px' pl='5px' pr='5px' opacity='0.7' _hover={{ textDecoration: 'none', }} cursor='default' display='flex' alignItems='center'>
            Bro Launchpad <Badge variant='outline' justifySelf='flex-end' alignItems='center' display='flex' justifyContent='center' alignContent='center' ml='10px' colorScheme='green'>Soon</Badge>
          </Box>
        </Box>

        <Box display={{ base: 'flex', md: 'none' }} height="100%" width="27px" className={glitch.menu} justifyContent='center' alignItems='center' onClick={() => { changeState(!state) }}>
          {state ? <FaXmark /> : <FaBars />}
        </Box>

      </Flex>
      <Box position='fixed' zIndex={state ? 10000 : 0} background="#0c0f12" top='0' bottom='0' left='0' right='0' display={{ base: 'flex', md: 'none' }} visibility={state ? 'visible' : 'hidden'} justifyContent='center' alignItems='flex-end' flexDirection='column'>
        <Link mt='50px' mr='30px' opacity={state ? 1 : 0} onClick={() => { changeState(false) }} href='#get-started' pl='10px' pr='10px' fontSize='20px' style={orbitronFont.style} _hover={{ color: '#9bf0f5' }}>Getting Started</Link>
        <Link mt='50px' mr='30px' opacity={state ? 1 : 0} onClick={() => { changeState(false) }} href='#features' pl='10px' pr='10px' fontSize='20px' style={orbitronFont.style} _hover={{ color: '#9bf0f5' }}>Features</Link>
        <Link mt='50px' mr='30px' opacity={state ? 1 : 0} onClick={() => { changeState(false) }} href='#roadmap' pl='10px' pr='10px' fontSize='20px' style={orbitronFont.style} _hover={{ color: '#9bf0f5' }}>Roadmap</Link>
        <Link mt='50px' mr='30px' opacity={state ? 1 : 0} onClick={() => { changeState(false) }} href='https://bro-bot-academy.gitbook.io/brobot' pl='10px' pr='10px' fontSize='20px' style={orbitronFont.style} _hover={{ color: '#9bf0f5' }}>Tutorial</Link>
        <Link mt='50px' mr='30px' opacity={state ? 1 : 0} onClick={() => { changeState(false) }} href='/BRO Whitepaper.pdf' pl='10px' pr='10px' fontSize='20px' style={orbitronFont.style} _hover={{ color: '#9bf0f5' }}>Whitepaper</Link>
        <Box display={{ base: 'flex', md: 'none' }} position='absolute' top='0' right='0' m='30px' width="35px" className={glitch.menu} justifyContent='center' alignItems='center' onClick={() => { changeState(false); toggleTool(false); toggleSmallTool(false) }}>
          <FaXmark />
        </Box>
        <Box position='relative' display='block' width='100%' justifySelf='center' mt='50px'>
          <Button borderRadius='0' minH='60px' display='flex' justifyContent='flex-end' alignItems='center' width='100%' onClick={() => { toggleSmallTool(!smallTool) }} style={orbitronFont.style} fontSize='20px' background='#fda007' _hover={{
            background: '#fda007'
          }}>
            <Box mr="25px" display='flex' justifyContent='flex-end' alignItems='center'>
              <Box as='span' paddingRight='7px'>Start</Box> <FaChevronDown />
            </Box>
          </Button>
        </Box>
        <Box ref={toolRef} as='div' visibility={smallTool ? 'visible' : 'hidden'} zIndex={smallTool ? 1000 : 0} opacity={smallTool ? 1 : 0} transition={'all .2s ease-in-out'} flexDirection='column' width='80%' background="#161c21" padding='10px' borderRadius='5px' right='10px' transform='translateY(286px)' position='absolute'>
             <ChakraLink onClick={() => toggleSmallTool(false)} href='https://t.me/snipewithbro_bot' isExternal pt='10px' pb='10px' pl='5px' pr='5px' _hover={{ textDecoration: 'none', background: '#1e262d' }} display='flex' alignItems='center'>
                <Box width='25px' height='25px'><FaTelegram /></Box>
                <Box as='span' ml='10px'>BRO SNIPER BOT</Box>
                <Badge variant='outline' justifySelf='flex-end' alignItems='center' display='flex' justifyContent='center' alignContent='center' ml='10px' colorScheme='green'>Soon</Badge>
             </ChakraLink>
             <Divider opacity='.1' />
             <ChakraLink onClick={() => toggleTool(false)} href='https://t.me/brosignal_bot' isExternal pt='10px' pb='10px' pl='5px' pr='5px' _hover={{ textDecoration: 'none', background: '#1e262d' }} display='flex' alignItems='center'>
                <Box width='25px' height='25px'><FaTelegram /></Box>
                <Box as='span' ml='10px'>Signal Bot</Box>
                <Badge variant='outline' justifySelf='flex-end' alignItems='center' display='flex' justifyContent='center' alignContent='center' ml='10px' colorScheme='green'>Soon</Badge>
            
             </ChakraLink>
             <Divider opacity='.1' />
             <ChakraLink onClick={() => toggleSmallTool(false)} href='#' isExternal pt='10px' pb='10px' pl='5px' pr='5px' _hover={{ textDecoration: 'none', background: '#1e262d' }} display='flex' alignItems='center'>
                <Box width='25px' height='25px'><FaTelegram /></Box>
                <Box as='span' ml='10px'>BroTrade Hub</Box>
                <Badge variant='outline' justifySelf='flex-end' alignItems='center' display='flex' justifyContent='center' alignContent='center' ml='10px' colorScheme='green'>Soon</Badge>
             </ChakraLink>
             <Divider opacity='.1' />
             <ChakraLink onClick={() => toggleTool(false)} href='#' isExternal pt='10px' pb='10px' pl='5px' pr='5px' _hover={{ textDecoration: 'none', background: '#1e262d' }} display='flex' alignItems='center'>
                <Box width='25px' height='25px'><FaTelegram /></Box>
                <Box as='span' ml='10px'>Bro Launchpad</Box>
                <Badge variant='outline' justifySelf='flex-end' alignItems='center' display='flex' justifyContent='center' alignContent='center' ml='10px' colorScheme='green'>Soon</Badge>
            
             </ChakraLink>
          </Box>
          {/* <Divider opacity='.1' />
          <Box pt='10px' pb='10px' pl='5px' pr='5px' opacity='0.7' _hover={{ textDecoration: 'none', }} cursor='default' display='flex' alignItems='center'>
            BroTrade Hub <Badge variant='outline' justifySelf='flex-end' alignItems='center' display='flex' justifyContent='center' alignContent='center' ml='10px' colorScheme='green'>Coming Soon</Badge>
          </Box>
          <Divider opacity='.1' />
          <Box pt='10px' pb='10px' pl='5px' pr='5px' opacity='0.7' _hover={{ textDecoration: 'none', }} cursor='default' display='flex' alignItems='center'>
            Bro Launchpad <Badge variant='outline' justifySelf='flex-end' alignItems='center' display='flex' justifyContent='center' alignContent='center' ml='10px' colorScheme='green'>Coming Soon</Badge>
          </Box> */}
        </Box>
      
    </Flex>
  )
}

export default Header;
