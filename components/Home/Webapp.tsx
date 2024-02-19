import { Box, Flex, Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import glitch from "@/components/Home/glitch.module.css";

const Webapp = () => {
  return (
    <Flex
      mt={{ base: '100px' }}
      flexDirection='column'
      alignItems="center"
      width="100%"
      maxWidth='1280px'
      pl='20px'
      pr='20px'
    >
      <Flex
        mt='50px'
        flexDirection='column'
        alignItems="center"
        position='relative'
        width="100%"
        minHeight={{ base: '300px', md: "700px" }}
      >
        <video
          src="/BROVideoFinal.mp4"
          style={{
            position: 'absolute',
            borderRadius:'10px',
            zIndex: '10',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            margin: '5px',
          }}
          autoPlay
          muted
          loop
        />
      </Flex>
      <Box display='flex' alignItems='center' justifyContent='center' pt='80px' pb='20px' fontSize='18px'>
                <span className={glitch.glitch}>For More Visit </span>
                <Button as={Link} href="https://tradewithbro.com" fontSize="18px" _hover={{
                    background: '#9bf0f5'
                }}>tradewithbro.com</Button>
            </Box>
    </Flex>
  );
};

export default Webapp;
