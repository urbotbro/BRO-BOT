'use client'

import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { Ubuntu } from "next/font/google";
import glitch from '@/components/Home/glitch.module.css';

const ubuntuFont = Ubuntu({weight: ['300', '400', '500', '700'], subsets: ['latin']})

const Boost = () => {
    return (
    <Flex width="100%" maxWidth='1280px' justify='center' mt='150px' mb='150px' align='center'>
        <Box width='60%'>
            <Heading  pb='20px' style={ubuntuFont.style} className={glitch.glitchWrapper}>
                <span className={glitch.glitch} data-text="Trade Like Never Before">Trade Like Never Before</span>
            </Heading>
            <Box fontSize='20px'>
                Dive into the world of BRO Bot, your ultimate Telegram companion. Experience the adrenaline of sniping the hottest launches or effortlessly acquiring live tokens. Crafted for the Ethereum Network, BRO Bot is not just a tool, it&apos;s your gateway to seamless trading. As we evolve, more chains await. Join us, and redefine how you trade. Unleash the power. Don&apos;t just trade, BRO-trade! 🔥
            </Box>
        </Box>
        <Box width='40%' display='flex' justifyContent='center' alignItems='center'>
            <Image src="/Buysell.gif"  alt="Trade Like Never Before" width='90%' />
        </Box>
    </Flex>
    )
}

export default Boost