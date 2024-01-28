import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <Box justifySelf='center' alignSelf='center' background='#0c0f12' color='white' zIndex='10000' position='fixed' width='100%' height='100%' left='0' right='0' top='0' bottom='0' justifyContent='center' alignItems='center'>
        <Image src="/Loader.gif" alt='Site Loading' />
    </Box>
  )
}

export default Loader