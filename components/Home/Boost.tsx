'use client'

import { Box, Flex, Heading, Image } from "@chakra-ui/react"

const Boost = () => {
    return (
    <Flex width="100%" maxWidth='1280px' justify='center' mt='150px' mb='150px' align='center'>
        <Box width='60%'>
            <Heading  pb='20px'>
                Trade Like Never Before
            </Heading>
            <Box>
                Dive into the world of BRO Bot, your ultimate Telegram companion. Experience the adrenaline of sniping the hottest launches or effortlessly acquiring live tokens. Crafted for the Ethereum Network, BRO Bot is not just a tool, it&apos;s your gateway to seamless trading. As we evolve, more chains await. Join us, and redefine how you trade. Unleash the power. Don&apos;t just trade, BRO-trade! 🔥
            </Box>
        </Box>
        <Box width='40%' display='flex' justifyContent='center' alignItems='center'>
            <Image src="/Buysell.gif"  alt="Trade Like Never Before" width='70%' />
        </Box>
    </Flex>
    )
}

export default Boost