import { Box, Flex, SimpleGrid, Button } from "@chakra-ui/react"
import Link from "next/link";
import { ImageCard } from "../Card";
import glitch from '@/components/Home/glitch.module.css'
import { Orbitron } from "next/font/google";

const orbitronFont = Orbitron({weight: ['400', '500', '600', '700'], subsets: ['latin']})

const Webapp2 = () => {
    const imageOptions = [
        {
            imgSrc: '/BRO BOT Trade.png', 
        },
        {
            imgSrc: '/BRO BOT Bridge.png',
        },
        {
            imgSrc: '/BRO BOT Launch.png',
        },
    ];

  return (
    <Box width="100%" maxWidth="1280px" mx="auto" mt="40px">
            <Flex direction="column" align="center" justify="center" mb="40px">
            </Flex>
            <SimpleGrid mt="20px" ml='20px' mr='20px' justifySelf="center" border='0.0001px solid #ffffff37' padding='10px' borderRadius='10px' columns={{base: 1, md: 2, lg: 3}} spacing="5" justifyContent={{base: "center", md: "flex-start"}}>
                {imageOptions.map((elem, index) => (
                    <ImageCard key={index} imgSrc={elem.imgSrc} />
                ))}
            </SimpleGrid>
            <Box display='flex' alignItems='center' justifyContent='center' pt='20px' pb='20px' fontSize='18px'>
                <span className={glitch.glitch}>For More Visit </span>
                <Button as={Link}  href="https://tradewithbro.com" fontSize="18px" _hover={{
              background: '#9bf0f5'
            }}>tradewithbro.com</Button> 
      </Box>
        </Box>
  )
}

export default Webapp2
