import { Box, Flex, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import glitch from '@/components/Home/glitch.module.css';

const Webapp = () => {
  return (
    <Box mt={{ base: '100px' }} display='flex' flexDirection='column' alignItems="center" width="100%" maxWidth='1280px' pl='20px' pr='20px'>
      <Flex mt='50px' flexDirection='column' alignItems="center" padding='20px' borderRadius='10px' position='relative' width="100%" minHeight={{ base: '200px', md: "600px" }}>
        {/* Video container with Chakra UI styling */}
        <Box width="100%" borderRadius="10px" overflow="hidden">
          <video width="100%" controls>
            <source src="/bropresale.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Flex>
      <Box display='flex' alignItems='center' justifyContent='center' pt='30px' pb='20px' fontSize='18px'>
        <span className={glitch.glitch}>For More Visit </span>
        <NextLink href="https://tradewithbro.com" passHref>
          <Button
            as="a" // Use `a` tag to properly redirect
            fontSize="18px"
            background="#fda007"
            _hover={{
              background: '#fda007',
            }}
          >
            TradeWithBro
          </Button>
        </NextLink>
     </Box>
    </Box>
  );
};

export default Webapp;
