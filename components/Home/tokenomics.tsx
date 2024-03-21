"use client";
import { Flex, Heading, Box, Image } from "@chakra-ui/react";
import { Orbitron } from "next/font/google";
import glitch from "@/components/Home/glitch.module.css";

const orbitronFont = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Tokenomics = () => {
  return (
    <Flex
      mt="150px"
      mb="150px"
      width="100%"
      maxW="1280px"
      flexDirection="column"
      justify="center"
      align="center"
      id="tokenomics"
    >
      <Heading
        alignSelf="center"
        ml="20px"
        mt="50px"
        mb="20px"
        style={orbitronFont.style}
        className={glitch.glitchWapper}
      >
        <span className={glitch.glitch} data-text="Tokenomics">
          Tokenomics
        </span>
      </Heading>
      <Flex
        textAlign={{ base: "center", md: "start" }}
        width="100%"
        maxWidth="1280px"
        direction={{ base: "column-reverse", md: "row" }}
        justify="center"
        mt="60px"
        mb="150px"
        align="center"
        pl="20px"
        pr="20px"
      >
        <Box width={{ base: "100%", md: "60%" }}>
          <Box fontSize="20px" pl={{ base: "10px", md: "initial" }}>
          <span style={{color:"#fda007"}}>Total Supply:</span> 1 Million BRO tokens <br />
          <span style={{color:"#fda007"}}>Team Allocation:</span> 100,000 tokens
            <br />
             locked for 5 years without revenue sharing for motivation.quarterly unlocks.
            <br />
            <span style={{color:"#fda007"}}>Presale:</span> 168,407 tokens via fair launch.
            <br />
            <span style={{color:"#fda007"}}>LP allocation:</span> 81,593 tokens, locked for 1 years for market stability.
            <br />
            <span style={{color:"#fda007"}}>Treasury:</span> 650,000 tokens for BRO Bonus, 5-year vesting, quarterly unlocks, re-locking unused tokens for sustainability.
            <br />
            <span style={{color:"#fda007"}}>Revenue:</span> 45% of bot transaction fees to revenue dashboard
            <br />
            <span style={{color:"#fda007"}}>2% Sell tax</span> for revenue share
            <br />
            <span style={{color:"#fda007"}}>2% Sell tax</span> for team and development
            <br/>
            <span style={{color:"#fda007"}}>2% Buy tax</span> for LP injection
          </Box>
        </Box>
        <Box
          width={{ base: "100%", md: "60%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src="/tokenomics.png" alt="tokenomics" width="80%" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Tokenomics;
