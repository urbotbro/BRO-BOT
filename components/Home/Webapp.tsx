import { Box, Flex, Image, Badge, Tooltip } from "@chakra-ui/react"
import { FaTelegram, FaGlobe, FaAppStore, FaGooglePlay, FaXTwitter } from "react-icons/fa6";
import { RiTelegramLine } from "react-icons/ri";
import glitch from "@/components/Home/glitch.module.css"
import { Link } from "@chakra-ui/next-js"


const Webapp = () => {
  return (
    <Box mt={{base: '100px'}} justifyContent={{base: 'center', md: 'flex-start'}} width="100%" maxWidth='1280px'>
        <Flex alignItems='center' justify='space-evenly' flexWrap='wrap'>
            <Box as={Link} href="/#" _hover={{textDecoration:'none'}} display='flex' alignItems='center' mr='15px' background='#0088cc' padding='10px' borderRadius='5px'>
                <Box className={glitch.menu} height="100%" width='55px' pr='10px'>
                    <FaTelegram />
                </Box>
                <Box>
                    <Badge fontSize='13px' p='5px' borderRadius='5px'>Available</Badge>
                    <Box fontSize='20px' textTransform='uppercase' fontWeight='700'>Telegram</Box>
                </Box>
            </Box>
            <Box display='flex' alignItems='center' mr='15px'>
                <Box className={glitch.menu} height="100%" width='55px' pr='10px'>
                    <FaGlobe />
                </Box>
                <Box>
                    <Badge fontSize='13px' colorScheme="green" p='5px' borderRadius='5px'>Soon</Badge>
                    <Box fontSize='20px' textTransform='uppercase' fontWeight='700'>Webapp</Box>
                </Box>
            </Box>
            <Box display='flex' alignItems='center' mr='15px'>
                <Box className={glitch.menu} height="100%" width='55px' pr='10px'>
                    <FaAppStore />
                </Box>
                <Box>
                    <Badge fontSize='13px' colorScheme="green" p='5px' borderRadius='5px'>Soon</Badge>
                    <Box fontSize='20px' textTransform='uppercase' fontWeight='700'>
                        App Store
                    </Box>
                </Box>
            </Box>
            <Box display='flex' alignItems='center' mr='15px'>
                <Box className={glitch.menu} height="100%" width='55px' pr='10px'>
                    <FaGooglePlay />
                </Box>
                <Box>
                    <Badge fontSize='13px' colorScheme="green" p='5px' borderRadius='5px'>Soon</Badge>
                    <Box fontSize='20px' textTransform='uppercase' fontWeight='700'>
                        Play Store
                    </Box>
                </Box>
            </Box>
            <Box height="35px" display='flex' >
                <Tooltip label='Telegram Community' transition='none' openDelay={500} placement="top" className={glitch.menu} >
                    <Link href="" className={glitch.menu} height='100%' width='55px'>
                        <RiTelegramLine />
                    </Link>
                </Tooltip>
                <Tooltip label='X Community' transition='none' openDelay={500} placement="top" className={glitch.menu}>
                    <Link href="" className={glitch.menu} height='100%' width='50px'>
                    <FaXTwitter />
                    </Link>
                </Tooltip>
            </Box>
        </Flex>
        <Flex mt='50px' border='0.0001px solid #ffffff37' padding='20px' borderRadius='10px' display='flex' position='relative' justifyContent='center' alignItems='center' width="100%" minHeight="700px">
            {/* <Image src="/BRO BOT Dash.png" alt="Image" /> */}
        <Box position='absolute' zIndex='10' display='flex' justifyContent='center' alignItems='center' width="95%" minHeight="650px" sx={{
            background: `url('/BRO BOT Dash.png') center`,
            backgroundSize: 'contain',
            filter:'blur(5px)',
        }}></Box>
        <Box zIndex='11' fontSize='25px' fontWeight='700'>Coming Soon</Box>

        </Flex>
    </Box>
  )
}

export default Webapp