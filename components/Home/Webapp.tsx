import { Box, Flex, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import glitch from '@/components/Home/glitch.module.css';

const Webapp = () => {
  return (
    <Box mt={{ base: '100px' }} display='flex' flexDirection='column' alignItems="center" width="100%" maxWidth='1280px' pl='20px' pr='20px'>
      <Flex mt='50px' flexDirection='column' alignItems="center" border='0.0001px solid #ffffff37' padding='20px' borderRadius='10px' position='relative' width="100%" minHeight={{ base: '300px', md: "600px" }}>
        {/* <Box position='absolute' zIndex='10' display='flex' justifyContent='center' alignItems='center' width="100%" height="90%" sx={{
          background: `url('/BROVideoFinal.gif') center`,
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat'
        }}> */}
          <Image src="/BroVideoFinal.gif" alt="BROVideoFinal" borderRadius='10px' width='100%' />
        {/* </Box> */}
      </Flex>
      <Box display='flex' alignItems='center' justifyContent='center' pt='30px' pb='20px' fontSize='18px'>
                <span className={glitch.glitch}>For More Visit </span>
                <Button as={Link}  href="https://tradewithbro.com" fontSize="18px" _hover={{
                    background: '#9bf0f5'
                }}>TradeWithBro</Button> 
            </Box>
    </Box>
  );
};

export default Webapp;
