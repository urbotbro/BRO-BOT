import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from '@chakra-ui/next-js';
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  return (
    <Flex as='footer' justify='center' direction='column' align='center' bg='black'>
      <Flex direction='column' as='div' width='100%' maxWidth='1280px' mt='150px' mb='150px' justify='center' align='center'>
        <Box width='200px'>
          <Image src='/Logo.png' alt='Footer Logo' />
        </Box>
        <Box mt='50px' fontSize='30px' fontWeight='700'>
          Start Trading with BRO BOT
        </Box>
        
        <Box>
          <Flex>
            <Link href='/#'>
              <FaXTwitter />
            </Link>
            <Link href="/#">
              <FaTelegram />
            </Link>
          </Flex>
        </Box>

      </Flex>
        <Box fontSize='14px' mb='10px'>
          Copyright &copy;{date.getFullYear()} BRO BOT. All rights reserved.
        </Box>
    </Flex>
  )
}

export default Footer