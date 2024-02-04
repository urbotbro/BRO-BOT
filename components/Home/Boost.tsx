'use client'

import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { Ubuntu, Orbitron } from "next/font/google";
import newHero from '@/components/Home/second.module.css';

const ubuntuFont = Ubuntu({weight: ['300', '400', '500', '700'], subsets: ['latin']})
const orbitronFont = Orbitron({weight: ['400', '500', '600', '700'], subsets: ['latin']})

const Boost = () => {
    return (
    <Flex textAlign={{base: 'center', md: 'start'}} width="100%" maxWidth='1280px' direction={{base: 'column-reverse', md: 'row'}} justify='center' mt='150px' mb='150px' align='center' pl='20px' pr='20px'>
        <Box width={{base: '100%', md: '60%'}}>
            <Heading  pb={{base: '20px', md: '25px' }} style={orbitronFont.style} mb={{base: '30px', md: 'initial'}} mt={{base: '60px', md: 'initial'}} className={newHero.heroContainer}>
                <span className={`${newHero.glitch} ${newHero.hero} ${newHero.layers}`}  data-text="Trade Like Never Before">Trade Like Never Before</span>
            </Heading>
            <Box fontSize='20px' pl={{base: '10px', md: 'initial'}}>
                Bro isn/’t just another platform; it/’s your trading companion, your mentor in the maze of crypto. Here, you/’ll find Bro Bot, Signal Bot, an innovative Launchpad, and a Trade Hub—all designed to make your trading experience as enriching as it is profitable. With Bro, you/’re not just making trades; you/’re embarking on a journey with a friend who/’s got your back, every step of the way. Welcome to Bro, where every trade tells a story, and success is a shared journey. With Bro, you/’re not following trends; you/’re setting them.
        </Box>
        <Box width={{base: '100%', md: '60%'}} display='flex' justifyContent='center' alignItems='center'>
            <Image src="/Buysell.gif"  alt="Trade Like Never Before" width='80%' />
        </Box>
    </Flex>
    )
}

export default Boost
