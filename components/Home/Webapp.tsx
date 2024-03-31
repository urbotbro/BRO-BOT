import { Box, Flex, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import glitch from '@/components/Home/glitch.module.css';

const Webapp = () => {
  return (
    <Box mt={{ base: '100px' }} display='flex' flexDirection='column' alignItems="center" width="100%" maxWidth='1280px' pl='20px' pr='20px'>
      <Flex mt='50px' flexDirection='column' alignItems="center" border='0.0001px solid #ffffff37' padding='20px' borderRadius='10px' position='relative' width="100%" minHeight={{ base: '200px', md: "600px" }}>
        
               <Image src="/BroooPresale.gif" alt="BroooPresale" borderRadius='10px' width='100%' />

        
      </Flex>
      <Box display='flex' alignItems='center' justifyContent='center' pt='30px' pb='20px' fontSize='18px'>
         <span className={glitch.glitch}>For More Visit </span>
         <Button
           as={Link}
           href="https://tradewithbro.com"
           fontSize="18px"
           background="#fda007"
           _hover={{
              background: '#fda007'
           }}
         >
          TradeWithBro
        </Button> 
     </Box>
</Box>

  );
};

export default Webapp;
