'use client'

import { Box, Flex, Heading, Image } from "@chakra-ui/react"

const Boost = () => {
    return (
    <Flex width="100%" maxWidth='1280px' justify='center' mt='150px' mb='150px' align='center'>
        <Box>
            <Heading>
                Trade Like Never Before
            </Heading>
            <Box>
                Dive into the world of BRO Bot, your ultimate Telegram companion. Experience the adrenaline of sniping the hottest launches or effortlessly acquiring live tokens. Crafted for the Ethereum Network, BRO Bot is not just a tool, it's your gateway to seamless trading. As we evolve, more chains await. Join us, and redefine how you trade. Unleash the power. Don&apos;t just trade, BRO-trade! 🔥
            </Box>
        </Box>
        <Box>
            <Image src="/Buysell.gif" alt="Trade Like Never Before" />
        </Box>
    </Flex>
    )
}

export default Boost