import { Box, Flex, Image, Badge, Tooltip } from "@chakra-ui/react"
import { FaTelegram, FaGlobe,FaRocket, FaAppStore, FaGooglePlay, FaXTwitter } from "react-icons/fa6";
import { RiTelegramLine } from "react-icons/ri";
import glitch from "@/components/Home/glitch.module.css"
import { Link } from "@chakra-ui/next-js"


const Webapp = () => {
  return (
    <<Box mt={{base: '100px'}} display='flex' flexDirection='column' alignItems="center" width="100%" maxWidth='1280px' pl='20px' pr='20px'>
    <Flex alignItems='center' justify={{base: 'space-evenly', md: 'space-evenly'}} flexWrap='wrap' width='100%'>
        {/* Telegram Section */}
        <Box as={Link} href="/#" flexDirection={{base: 'column', md: 'row'}} justifyContent='center' _hover={{textDecoration:'none'}} display='flex' alignItems='center' mr={{base: '0',md: '15px'}} background='#0088cc' padding='8px' borderRadius='5px'>
            <Box className={glitch.menu} height="80%" width={{base: '35px', sm: '50px'}} pr={{base: '0', md:'10px'}}>
                <FaTelegram />
            </Box>
            <Box display={{base: 'flex', md: 'block'}} flexDirection='column' justifyContent='center' alignItems='center' mt={{base: '8px', md: '0'}}>
                <Badge fontSize={{base: '9px', sm: '12px'}} p='4px' borderRadius='5px'>Available</Badge>
                <Box fontSize={{base: '13px', sm: '16px', md: '19px'}} textTransform='uppercase' fontWeight='700' mt={{base: '8px', md: '0'}}>BRO BOT</Box>
            </Box>
        </Box>
        {/* BroTrade Hub Section */}
        <Box display='flex' flexDirection={{base: 'column', md: 'row'}} justifyContent='center' alignItems='center' mr={{base: '0',md: '15px'}}>
            <Box className={glitch.menu} height="80%" width={{base: '35px', sm: '50px'}} pr={{base: '0', md:'10px'}}>
                <FaGlobe />
            </Box>
            <Box display={{base: 'flex', md: 'block'}} flexDirection='column' justifyContent='center' alignItems='center' mt={{base: '8px', md: '0'}}>
                <Badge fontSize={{base: '9px', sm: '12px'}} colorScheme="green" p='4px' borderRadius='5px'>Soon</Badge>
                <Box fontSize={{base: '13px', sm: '16px', md: '19px'}} textTransform='uppercase' fontWeight='700' mt={{base: '8px', md: '0'}}>BroTrade Hub</Box>
            </Box>
        </Box>
        {/* Bro Launchpads Section */}
        <Box display='flex' flexDirection={{base: 'column', md: 'row'}} justifyContent='center' alignItems='center' mr={{base: '0',md: '15px'}}>
            <Box className={glitch.menu} height="80%" width={{base: '35px', sm: '50px'}} pr={{base: '0', md:'10px'}}>
                <FaRocket />
            </Box>
            <Box display={{base: 'flex', md: 'block'}} flexDirection='column' justifyContent='center' alignItems='center' mt={{base: '8px', md: '0'}}>
                <Badge fontSize={{base: '9px', sm: '12px'}} colorScheme="green" p='4px' borderRadius='5px'>Soon</Badge>
                <Box fontSize={{base: '13px', sm: '16px', md: '19px'}} textTransform='uppercase' fontWeight='700' mt={{base: '8px', md: '0'}}>Bro Launchpads</Box>
            </Box>
        </Box>
        {/* App Store Section */}
        <Box display='flex' flexDirection={{base: 'column', md: 'row'}} justifyContent='center' alignItems='center' mr={{base: '0',md: '15px'}}>
            <Box className={glitch.menu} height="80%" width={{base: '35px', sm: '50px'}} pr={{base: '0', md:'10px'}}>
                <FaAppStore />
            </Box>
            <Box display={{base: 'flex', md: 'block'}} flexDirection='column' justifyContent='center' alignItems='center' mt={{base: '8px', md: '0'}}>
                <Badge fontSize={{base: '9px', sm: '12px'}} colorScheme="green" p='4px' borderRadius='5px'>Soon</Badge>
                <Box fontSize={{base: '13px', sm: '16px', md: '19px'}} textTransform='uppercase' fontWeight='700' mt={{base: '8px', md: '0'}}>
                    App Store
                </Box>
            </Box>
        </Box>
        {/* Play Store Section */}
        <Box display={{base: 'none', md:'flex'}} alignItems='center'  mr={{base: '0',md: '15px'}}>
            <Box className={glitch.menu} height="80%" width='50px' pr='10px'>
                <FaGooglePlay />
            </Box>
            <Box>
                <Badge fontSize='12px' colorScheme="green" p='4px' borderRadius='5px'>Soon</Badge>
                <Box fontSize='19px' textTransform='uppercase' fontWeight='700'>
                    Play Store
                </Box>
            </Box>
        </Box>
    </Flex>
</Box>
            </Box>
        <Flex mt='50px' border='0.0001px solid #ffffff37' padding='20px' borderRadius='10px' display='flex' position='relative' justifyContent='center' alignItems='center' width="100%" minHeight={{base: '300px', md: "600px"}}>
            {/* <Image src="/BRO BOT Dash.png" alt="Image" /> */}
        <Box position='absolute' zIndex='10' display='flex' justifyContent='center' alignItems='center' width="95%" height="90%" sx={{
            background: `url('/BRO BOT Dash.png') center`,
            backgroundSize: 'cover',
            filter:'blur(5px)',
            backgroundRepeat: 'no-repeat'
        }}></Box>
        <Box zIndex='11' fontSize='25px' fontWeight='700'>Coming Soon</Box>

        </Flex>
    </Box>
  )
}

export default Webapp
