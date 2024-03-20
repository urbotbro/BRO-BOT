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
          Total Supply: 1,000,000 Tokens <br />
            Team: 80,000 Tokens (8%)
            <br />
            Liquidity Pool (LP): 90,000 Tokens (9%) <br />
            Fair Launch: 830,000 Tokens (83%)
            <br />
            Unsold tokens: Committed to being burned to reduce supply and
            enhance value.
            <br />
            Buy tax 2%
            <br />
            Sell tax 4%
            <br />
            Buy tax 2% goes to lp
            <br />
            and Sell tax 2% rev share holder and 2% development and team
            <br />
            Team token vesting preiod of 2 year
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
