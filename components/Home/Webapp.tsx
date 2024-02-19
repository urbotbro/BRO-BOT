import { Box, Flex } from "@chakra-ui/react"

const Webapp = () => {
  return (
    <Box mt={{base: '100px'}} display='flex' flexDirection='column' alignItems="center" width="100%" maxWidth='1280px' pl='20px' pr='20px'>
        
        <Flex mt='50px' flexDirection='column' alignItems="center"  border='0.0001px solid #ffffff37' padding='20px' borderRadius='10px' display='flex' position='relative' width="100%" minHeight={{base: '300px', md: "600px"}}>
            
        <Box position='absolute' zIndex='10' display='flex' justifyContent='center' alignItems='center' width="100%" height="90%" sx={{
            background: `url('/BROVideoFinal.gif') center`,
            backgroundSize: 'contain',
            // filter:'blur(5px)',
            backgroundRepeat: 'no-repeat'
        }}
        ></Box>  
        </Flex>
    </Box>
  )
}

export default Webapp