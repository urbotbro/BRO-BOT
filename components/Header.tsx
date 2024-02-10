'use client';
import { Link as ChakraLink, Divider, Box, Button, Flex, Popover, PopoverBody, Badge, PopoverFooter, PopoverContent, PopoverHeader, PopoverTrigger, Portal } from '@chakra-ui/react'
import React, { useState } from 'react';
import { Link, Image } from '@chakra-ui/next-js';
import { Ubuntu, Orbitron } from "next/font/google";
import { FaBars, FaXmark, FaTelegram } from 'react-icons/fa6';
import { FaChevronDown } from "react-icons/fa";
import glitch from '@/components/Home/glitch.module.css'
import tooltip from '@/components/Home/tooltip.module.css';
import Loader from './Home/loader';
const ubuntuFont = Ubuntu({weight: ['300', '400', '500', '700'], subsets: ['latin']})
const orbitronFont = Orbitron({weight: ['400', '500', '600', '700'], subsets: ['latin']})

const Header = () => {
  const [tool, toggleTool] = useState(false);
  const [smallTool, toggleSmallTool] = useState(false);
  const [state, changeState] = useState(false);


 return (
    <Flex as='header'
          justifyContent='space-between'
          alignItems='center'
          background='#0c0f12'
          color='white'
          position='fixed'
          top='0'
          left='0'
          right='0'
          width="100%"
          zIndex='1000'
          padding='10px'
    >
      {/* Logo */}
      <Box>
        <Image src='/Logo-min.png' alt="BRO" width={{ base: '60px', md: '80px' }} height={{ base: '60px', md: '80px' }} />
      </Box>

      {/* Rest of the header content */}
      <Flex display={{ base: 'none', md: 'flex' }} alignItems='center'>
        <Link href='#get-started' pl='10px' pr='10px' fontSize='15px' _hover={{ color: '#9bf0f5' }}>Getting Started</Link>
        <Link href='#features' pl='10px' pr='10px' fontSize='15px' _hover={{ color: '#9bf0f5' }}>Features</Link>
        <Link href='#roadmap' pl='10px' pr='10px' fontSize='15px' _hover={{ color: '#9bf0f5' }}>Roadmap</Link>
        <Link href='#docs' pl='10px' pr='10px' fontSize='15px' _hover={{ color: '#9bf0f5' }}>Docs</Link>
      </Flex>

      {/* Mobile Menu Button */}
      <Box display={{ base: 'flex', md: 'none' }} onClick={() => changeState(!state)}>
        {state ? <FaXmark /> : <FaBars />}
      </Box>

      {/* Mobile Menu (Conditional Rendering based on 'state') */}
      {state && (
        <Flex
          position='fixed'
          background='#0c0f12'
          width='100%'
          height='100%'
          top='0'
          left='0'
          zIndex='1000'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          {/* Mobile Nav Links */}
          <Link href='#get-started' fontSize='20px' _hover={{ color: '#9bf0f5' }}>Getting Started</Link>
          <Link href='#features' fontSize='20px' _hover={{ color: '#9bf0f5' }}>Features</Link>
          <Link href='#roadmap' fontSize='20px' _hover={{ color: '#9bf0f5' }}>Roadmap</Link>
          <Link href='#docs' fontSize='20px' _hover={{ color: '#9bf0f5' }}>Docs</Link>
        </Flex>
      )}
    </Flex>
  );
};

export default Header;
