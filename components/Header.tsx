'use client';
import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react';
import { Link, Image } from '@chakra-ui/next-js';
import { Ubuntu } from "next/font/google";

const ubuntuFont = Ubuntu({weight: ['300', '400', '500', '700'], subsets: ['latin']})

const Header = () => {
  return (
    <Flex as='header' justifyContent='center' align='center' background='#0c0f12' color='white' position='fixed' width="100%" zIndex='1000' pl='10px' pr='10px'>
      <Flex as='div' position='sticky' maxWidth='1280px' width="100%" justify='space-between' align='center' paddingTop='20px' paddingBottom='20px' pl='20px' pr='20px'>
        <Box>
          <Image src='/Logo.png' alt="BRO Bot" width={50} height={50} />
        </Box>

        <Box display={{base: 'none', md:'flex'}} justifyContent='space-between' alignItems='center'>
          <Link href='#get-started' pl='10px' pr='10px' fontSize='15px' style={ubuntuFont.style} _hover={{color: '#9bf0f5'}}>Getting Started</Link>
          <Link href='#' pl='10px' pr='10px' fontSize='15px' style={ubuntuFont.style} _hover={{color: '#9bf0f5'}}>Whitepaper</Link>
          <Link href='#roadmap' pl='10px' pr='10px' fontSize='15px' style={ubuntuFont.style} _hover={{color: '#9bf0f5'}}>Roadmap</Link>
          <Link href='#' pl='10px' pr='10px' fontSize='15px' style={ubuntuFont.style} _hover={{color: '#9bf0f5'}}>Docs</Link>
        </Box>
        <Box display={{base: 'none', md: 'block'}}>
          <Link href="https://bro-dashboard-gules.vercel.app/">
            <Button borderRadius='100px' fontSize='14px' background='#cdf6f8' _hover={{
              background: '#9bf0f5'
            }}>
              Dashboard
            </Button>
          </Link>
        </Box>

      </Flex>
    </Flex>
  )
}

export default Header