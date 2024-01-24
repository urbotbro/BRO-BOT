'use client';
import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react';
import { Link, Image } from '@chakra-ui/next-js';

const Header = () => {
  return (
    <Flex as='header' justifyContent='center' align='center' background='#0c0f12' color='white' position='fixed' left='0' right='0' zIndex='1000'>
      <Flex as='div' position='sticky' maxWidth='1280px' width="100%" justify='space-between' align='center' paddingTop='10px' paddingBottom='10px'>
        <Box>
          <Image src='/Logo.png' alt="BRO Bot" width={50} height={50} />
        </Box>

        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Link href='#' pl='10px' pr='10px' fontSize='14px' _hover={{color: '#9bf0f5'}}>Getting Started</Link>
          <Link href='#' pl='10px' pr='10px' fontSize='14px' _hover={{color: '#9bf0f5'}}>Whitepaper</Link>
          <Link href='#' pl='10px' pr='10px' fontSize='14px' _hover={{color: '#9bf0f5'}}>Roadmap</Link>
          <Link href='#' pl='10px' pr='10px' fontSize='14px' _hover={{color: '#9bf0f5'}}>Docs</Link>
        </Box>
        <Box>
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