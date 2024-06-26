import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Ubuntu, Orbitron } from "next/font/google";
import newHero from '@/components/Home/second.module.css';
import React from "react";
import dextools from "/dextools.png";
import moon from "/moon.png";
import scr from "/scr.png";
import pinksale from "/pinksale.png";
import solid from "/solid.png";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";


const ubuntuFont = Ubuntu({weight: ['300', '400', '500', '700'], subsets: ['latin']});
const orbitronFont = Orbitron({weight: ['400', '500', '600', '700'], subsets: ['latin']});

const Boost = () => {
    return (
        <Flex textAlign={{base: 'center', md: 'start'}} width="100%" maxWidth='1280px' direction={{base: 'column-reverse', md: 'row'}} justify='center' mt='150px' mb='150px' align='center' pl='20px' pr='20px'>
            <Box width={{base: '100%', md: '60%'}}>
                <Heading pb={{base: '20px', md: '25px' }} style={orbitronFont.style} mb={{base: '30px', md: 'initial'}} mt={{base: '60px', md: 'initial'}} className={newHero.heroContainer}>
                    <span className={`${newHero.glitch} ${newHero.hero} ${newHero.layers}`} data-text="Trade Like Never Before">Trade Like Never Before</span>
                </Heading>
                <Box fontSize='20px' pl={{base: '10px', md: 'initial'}}>
                    Bro isn’t just another platform; it’s your trading companion, your mentor in the maze of crypto. Here, you’ll find Bro Bot, Signal Bot, an innovative Launchpad, and a Trade Hub—all designed to make your trading experience as enriching as it is profitable. With Bro, you’re not just making trades; you’re embarking on a journey with a friend who’s got your back, every step of the way. Welcome to Bro, where every trade tells a story, and success is a shared journey. With Bro, you’re not following trends; you’re setting them.
                </Box>
            </Box>
            <Box width={{base: '100%', md: '60%'}} display='flex' justifyContent='center' alignItems='center'>
                <Image src="/Buysell.gif" alt="Trade Like Never Before" width='80%' />
            </Box>
        </Flex>
    );
}

export default Boost;
const Partners = () => {
  return (
    <>
      <section className="py-14 lg:py-24 bg-white">
        <h1 className="pb-10 text-3xl text-center md:text-4xl font-days lg:text-5xl">
          Partners
        </h1>
        <Marquee className="">
          <div className="flex justify-center items-center gap-16">
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={pinksale} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={dextools} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={scr} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={moon} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[170px] " src={solid} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={pinksale} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={dextools} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={scr} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={moon} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[170px] " src={solid} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={pinksale} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={dextools} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={scr} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={moon} />
            </a>
            <a href="/">
              <img
                className="md:max-w-[250px] max-w-[170px] pr-16"
                src={solid}
              />
            </a>
          </div>
        </Marquee>
      </section>
    </>
  );
};

export default Partners;
