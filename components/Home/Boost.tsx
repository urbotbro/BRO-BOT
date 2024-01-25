'use client'

import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { Ubuntu, Orbitron } from "next/font/google";
import glitch from '@/components/Home/glitch.module.css';

const ubuntuFont = Ubuntu({weight: ['300', '400', '500', '700'], subsets: ['latin']})
const orbitronFont = Orbitron({weight: ['400', '500', '600', '700'], subsets: ['latin']})

const Boost = () => {
    return (
    <Flex textAlign={{base: 'center', md: 'start'}} width="100%" maxWidth='1280px' direction={{base: 'column-reverse', md: 'row'}} justify='center' mt='150px' mb='150px' align='center'>
        <Box width={{base: '100%', md: '60%'}}>
            <Heading  pb='20px' style={orbitronFont.style} mt={{base: '30px', md: 'initial'}} className={glitch.glitchWrapper}>
                <span className={glitch.glitch}  data-text="Trade Like Never Before">Trade Like Never Before</span>
            </Heading>
            <Box fontSize='20px' pl={{base: '10px', md: 'initial'}}>
                Dive into the world of BRO Bot, your ultimate Telegram companion. Experience the adrenaline of sniping the hottest launches or effortlessly acquiring live tokens. Crafted for the Ethereum Network, BRO Bot is not just a tool, it&apos;s your gateway to seamless trading. As we evolve, more chains await. Join us, and redefine how you trade. Unleash the power. Don&apos;t just trade, BRO-trade! 🔥
            </Box>
        </Box>
        <Box width={{base: '100%', md: '60%'}} display='flex' justifyContent='center' alignItems='center'>
            <Image src="/Buysell.gif"  alt="Trade Like Never Before" width='90%' />
        </Box>
    </Flex>
    )
}

export default Boost