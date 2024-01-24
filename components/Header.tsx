'use client';
import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react';
import { Link, Image } from '@chakra-ui/next-js';

const Header = () => {
  return (
    <Flex as='header' justifyContent='center' align='center'>
      <Flex as='div' position='sticky' maxWidth='1280px' width="100%" justify='space-between' align='center' paddingTop='10px' paddingBottom='10px'>
        <Box>
          <Image src='/Logo.png' alt="BRO Bot" width={50} height={50} />
        </Box>

        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Link href='#' pl='10px' pr='10px' fontSize='14px' _hover={{color: ''}}>Getting Started</Link>
          <Link href='#' pl='10px' pr='10px' fontSize='14px' _hover={{color: ''}}>Whitepaper</Link>
          <Link href='#' pl='10px' pr='10px' fontSize='14px' _hover={{color: ''}}>Roadmap</Link>
        </Box>
        <Box>
          <Button>
            Connect
          </Button>
        </Box>

      </Flex>
    </Flex>
  )
}

export default Header