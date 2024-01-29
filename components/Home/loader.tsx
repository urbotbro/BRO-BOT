import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Loader = ({ visibility }: {visibility: boolean}) => {
  return (
    <Box visibility={visibility ? 'visible': 'hidden'} transition='all .3s ease-in-out' display='flex' background='#0c0f12' color='white' zIndex={visibility ? '10000': '-10'} position='fixed' top='0' left='0' right='0' bottom='0'  justifyContent='center' alignItems='center'>
        <Image src="/Loader.gif" alt='Site Loading' />
    </Box>
  )
}

export default Loader