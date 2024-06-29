"use client";
import { Flex, Heading, Box, Image } from "@chakra-ui/react";
import { Orbitron } from "next/font/google";
import glitch from "@/components/Home/glitch.module.css";
import React from "react";
import { motion } from "framer-motion";
import TokenomicsChart from "./TokenomicsChart";

const orbitronFont = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Tokenomics = () => {
  return (
    <Flex
      mt="150px"
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
        textAlign={{ base: "center", md: "center" }}
        width="100%"
        maxWidth="1280px"
        direction={{ base: "column", md: "column" }}
        justify="center"
        mt="60px"
        align="center"
        pl="20px"
        pr="20px"
      >
        <Box width={{ base: "100%", md: "60%" }}>
          <Box fontSize="20px" pl={{ base: "10px", md: "initial" }}>
            <span style={{ color: "#fda007" }}>Total Supply:</span> 10,000,000
          </Box>
        </Box>
        <Box
          width={{ base: "100%", md: "60%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <TokenomicsChart />
          {/* <Image src="/tokenomics.png" alt="tokenomics" width="80%" /> */}
        </Box>

      </Flex>
    </Flex>
  );
};

export default Tokenomics;
