'use client';
import { Link as ChakraLink, Divider, Box, Button, Flex, Popover, PopoverBody, Badge, PopoverFooter, PopoverContent, PopoverHeader, PopoverTrigger, Portal } from '@chakra-ui/react'
import React, { useState } from 'react';
import { Link, Image } from '@chakra-ui/next-js';
import { Ubuntu, Orbitron } from "next/font/google";
import { FaBars, FaXmark, FaTelegram } from 'react-icons/fa6';
import { FaChevronDown } from "react-icons/fa";
import glitch from '@/components/Home/glitch.module.css'
import tooltip from '@/components/Home/tooltip.module.css';

const ubuntuFont = Ubuntu({weight: ['300', '400', '500', '700'], subsets: ['latin']})
const orbitronFont = Orbitron({weight: ['400', '500', '600', '700'], subsets: ['latin']})

const Header = () => {
  const [tool, toggleTool] = useState(false);
  const [state, changeState] = useState(false)


  return (
    <Flex as='header' justifyContent='center' align='center' background='#0c0f12' color='white' position='fixed' top='0' width="100%" zIndex='1000' pl='10px' pr='10px'>
      <Flex as='div' position='sticky' maxWidth='1280px' width="100%" justify='space-between' align='center' paddingTop='20px' paddingBottom='20px' pl='20px' pr='20px'>
        <Box>
          <Image src='/Logo.png' alt="BRO Bot" width={50} height={50} />
        </Box>

        <Box display={{base: 'none', md:'flex'}} justifyContent='space-between' alignItems='center'>
          <Link href='#get-started' pl='10px' pr='10px' fontSize='15px' style={orbitronFont.style} _hover={{color: '#9bf0f5'}}>Getting Started</Link>
          <Link href='#features' pl='10px' pr='10px' fontSize='15px' style={orbitronFont.style} _hover={{color: '#9bf0f5'}}>Features</Link>
          <Link href='#roadmap' pl='10px' pr='10px' fontSize='15px' style={orbitronFont.style} _hover={{color: '#9bf0f5'}}>Roadmap</Link>
          <Link href='/' pl='10px' pr='10px' fontSize='15px' style={orbitronFont.style} _hover={{color: '#9bf0f5'}}>Docs</Link>
        </Box>
        
        <Box position='relative' display={{base: 'none', md: 'block'}}>
          <Button borderRadius='100px' onClick={() => {toggleTool(!tool)}} style={orbitronFont.style} fontSize='14px' background='#cdf6f8' _hover={{
              background: '#9bf0f5'
            }}>
              <Box as='span' paddingRight='7px'>Start</Box> <FaChevronDown />
          </Button>
          </Box>
          <Box as='div' zIndex={tool ? 1000 : 0} opacity={tool ? 1 : 0} display={tool ? 'flex': 'none'} flexDirection='column' minWidth='240px' background="#161c21" padding='10px' borderRadius='5px' right='10px' transform='translateY(85px)' position='absolute'>
            <ChakraLink onClick={() => {toggleTool(false)}} as={Link} href='#' pt='10px' pb='10px' pl='5px' pr='5px' _hover={{textDecoration: 'none', background: '#1e262d'}} display='flex' alignItems='center'><Box className={glitch.menu} width='25px' height='25px'><FaTelegram /></Box> <Box as='span' ml='10px'>Telegram Bot</Box></ChakraLink>
                  <Divider opacity='.1' />
                <Box pt='10px' pb='10px' pl='5px' pr='5px' opacity='0.7' _hover={{textDecoration: 'none',}} cursor='default' display='flex' alignItems='center'>
                    Web App <Badge variant='outline' justifySelf='flex-end' alignItems='center' display='flex' justifyContent='center' alignContent='center' ml='10px' colorScheme='green'>Coming Soon</Badge>
                  </Box>
          </Box>
        {/* <Box display={{base: 'none', md: 'flex'}}>
          <Popover>
          <PopoverTrigger>
          <Button borderRadius='100px' onClick={() => {toggleTool(!tool)}} style={orbitronFont.style} fontSize='14px' background='#cdf6f8' _hover={{
              background: '#9bf0f5'
            }}>
              <Box as='span' paddingRight='7px'>Start</Box> <FaChevronDown />
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent background="#161c21" border='0' position='relative'>
              
              <PopoverBody display='flex' flexDirection='column'>
                <ChakraLink as={Link} href='#' pt='10px' pb='10px' pl='5px' pr='5px' _hover={{textDecoration: 'none', background: '#1e262d'}} display='flex' alignItems='center'><Box className={glitch.menu} width='25px' height='25px'><FaTelegram /></Box> <Box as='span' ml='10px'>Telegram Bot</Box></ChakraLink>
                <Divider opacity='.1' />
                <Box pt='10px' pb='10px' pl='5px' pr='5px' opacity='0.7' _hover={{textDecoration: 'none',}} cursor='default' display='flex' alignItems='center'>
                  Web App <Badge variant='outline' justifySelf='flex-end' alignItems='center' display='flex' justifyContent='center' alignContent='center' ml='10px' colorScheme='green'>Coming Soon</Badge>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        </Box> */}

          <Box display={{base: 'flex', md: 'none'}} height="100%" width="27px" className={glitch.menu} justifyContent='center' alignItems='center' onClick={() => {changeState(!state)}}>
            {state ? <FaXmark /> : <FaBars />}
          </Box>

      </Flex>
      <Box position='fixed' zIndex={state ? 10000 : 0} transition='all .5 ease-in-out' background="#0c0f12" top='0' bottom='0' left='0' right='0' display={state ? 'flex' : 'none'} justifyContent='center' alignItems='center' flexDirection='column'>
        <Link mt='20px' opacity={state ? 1 : 0} onClick={() => {changeState(false)}} href='#get-started' pl='10px' pr='10px' fontSize='20px' style={orbitronFont.style} _hover={{color: '#9bf0f5'}}>Getting Started</Link>
        <Link mt='20px' opacity={state ? 1 : 0} onClick={() => {changeState(false)}} href='#features' pl='10px' pr='10px' fontSize='20px' style={orbitronFont.style} _hover={{color: '#9bf0f5'}}>Features</Link>
        <Link mt='20px' opacity={state ? 1 : 0} onClick={() => {changeState(false)}} href='#roadmap' pl='10px' pr='10px' fontSize='20px' style={orbitronFont.style} _hover={{color: '#9bf0f5'}}>Roadmap</Link>
        <Link mt='20px' opacity={state ? 1 : 0} onClick={() => {changeState(false)}} href='#' pl='10px' pr='10px' fontSize='20px' style={orbitronFont.style} _hover={{color: '#9bf0f5'}}>Docs</Link>
        <Box display={{base: 'flex', md: 'none'}} position='absolute' top='0' right='0' m='30px' width="35px" className={glitch.menu} justifyContent='center' alignItems='center' onClick={() => {changeState(false)}}>
            <FaXmark />
        </Box>
      </Box>
    </Flex>
  )
}

export default Header