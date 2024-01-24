'use client';
import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react';
import { Link } from '@chakra-ui/next-js';

const Header = () => {
  return (
    <Flex as='header' justifyContent='center' align='center'>
      <Flex as='div' maxWidth='1280px'>
        <Box>
          Logo
        </Box>

        <Box>
          <Link href=''>Getting Started</Link>
          <Link href=''>Whitepaper</Link>
          <Link href=''>Roadmap</Link>
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