"use client";
import {
  Flex,
  Box,
  Text,
  Image as ChakraImage,
  Heading,
  Badge, 
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { Ubuntu, Orbitron } from "next/font/google";
import newHero from "@/components/Home/second.module.css";
import {
  FaTelegram,
  FaGlobe,
  FaRocket,
  FaAppStore,
  FaGooglePlay,
  FaXTwitter,
} from "react-icons/fa6";
import { RiTelegramLine } from "react-icons/ri";
import glitch from "@/components/Home/glitch.module.css";
import { Link } from "@chakra-ui/next-js";
import CountdownTimer from "./CountdownTimer";

const ubuntuFont = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});
const orbitronFont = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Intro = () => {
  return (
      <Flex as="section" direction="column"  width="100%" justify="center" align="center">
        <Flex
          as="section"
          width="100%"
          direction={{ base: "column-reverse", md: "row" }}
          maxWidth="1280px"
          justifyContent="center"
          align="center"
          minH="700px"
          pl="20px"
          pr="20px"
        >
          <Box
            width={{ base: "100%", md: "60%" }}
            textAlign={{ base: "center", md: "start" }}
            display={{ base: "flex", md: "block" }}
            flexDirection={{ base: "column" }}
          >
            <Heading
              fontSize={{ base: "33px", md: "40px", lg: "45px", xl: "55px" }}
              pb="20px"
              className={newHero.heroContainer}
              style={orbitronFont.style}
            >
              <Text
                className={`${newHero.glitch} ${newHero.hero} ${newHero.layers}`}
                data-text="PandaBro:Your Trading,Our Technology"
              >
                PandaBro:Your Trading,Our Technology
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "20px", md: "25px" }}
              mt={{ base: "20px", sm: "0" }}
              lineHeight={{ base: "160%", sm: "initial" }}
              style={orbitronFont.style}
            >
              Your all-in-one crypto ecosystem. Launching, trading, and signals
              united under one hub - everything you need with PandaBro.
            </Text>
          </Box>
          <Box
            width={{ base: "90%", md: "40%" }}
            mt={{ base: "100px", md: "0" }}
            mb={{ base: "20px", md: "0" }}
            display={{ base: "none", sm: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <ChakraImage src="/GIF.gif" alt="BroBot Logo" width="350px" />
            {/* <Image src='/GIF.gif' alt="BroBot Image" width={50} height={50} /> */}
          </Box>
        </Flex>
        
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          mr={{ base: "0", md: "15px" }}
        >
          <Box
            className={glitch.menu}
            height="90%"
            width={{ base: "35px", sm: "50px" }}
            pr={{ base: "0", md: "9px" }}
          >
            <FaGlobe />
          </Box>
          <Box
            display={{ base: "flex", md: "block" }}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mt={{ base: "5px", md: "0" }}
          >
            <Badge
              fontSize={{ base: "8px", sm: "11px" }}
              colorScheme="green"
              p="2px"
              borderRadius="5px"
            >
              Soon
            </Badge>
            <Box
              fontSize={{ base: "11px", sm: "14", md: "17px" }}
              textTransform="uppercase"
              fontWeight="700"
              mt={{ base: "5px", md: "0" }}
            >
              PandaBroTrade Hub
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          mr={{ base: "0", md: "15px" }}
        >
          <Box
            className={glitch.menu}
            height="90%"
            width={{ base: "35px", sm: "50px" }}
            pr={{ base: "0", md: "9px" }}
          >
            <FaRocket />
          </Box>
          <Box
            display={{ base: "flex", md: "block" }}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mt={{ base: "5px", md: "0" }}
          >
            <Badge
              fontSize={{ base: "8px", sm: "11px" }}
              colorScheme="green"
              p="2px"
              borderRadius="5px"
            >
              Soon
            </Badge>
            <Box
              fontSize={{ base: "11px", sm: "14", md: "17px" }}
              textTransform="uppercase"
              fontWeight="700"
              mt={{ base: "5px", md: "0" }}
            >
              PandaBro Launchpads
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          mr={{ base: "0", md: "15px" }}
        >
          <Box
            className={glitch.menu}
            height="90%"
            width={{ base: "35px", sm: "50px" }}
            pr={{ base: "0", md: "9px" }}
          >
            <FaAppStore />
          </Box>
          <Box
            display={{ base: "flex", md: "block" }}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mt={{ base: "5px", md: "0" }}
          >
            <Badge
              fontSize={{ base: "8px", sm: "11px" }}
              colorScheme="green"
              p="2px"
              borderRadius="5px"
            >
              Soon
            </Badge>
            <Box
              fontSize={{ base: "11px", sm: "14", md: "17px" }}
              textTransform="uppercase"
              fontWeight="700"
              mt={{ base: "5px", md: "0" }}
            >
              App Store
            </Box>
          </Box>
        </Box>
        <Box
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          mr={{ base: "0", md: "15px" }}
        >
          <Box className={glitch.menu} height="100%" width="55px" pr="10px">
            <FaGooglePlay />
          </Box>
          <Box>
            <Badge
              fontSize="11px"
              colorScheme="green"
              p="2px"
              borderRadius="5px"
            >
              Soon
            </Badge>
            <Box fontSize="14px" textTransform="uppercase" fontWeight="700">
              Play Store
            </Box>
          </Box>
        </Box>
        <Box height="35px" display={{ base: "none", lg: "flex" }}>
          <Tooltip
            label="Telegram Community"
            padding="10px"
            textTransform="uppercase"
            borderRadius="5px"
            transition="none"
            openDelay={500}
            placement="top"
            className={glitch.menu}
          >
            <Link
              href=""
              className={glitch.div}
              height="100%"
              width="55px"
            >
              <RiTelegramLine />
            </Link>
          </Tooltip>
          <Tooltip
            label="Twitter Community"
            padding="10px"
            textTransform="uppercase"
            borderRadius="5px"
            transition="none"
            openDelay={500}
            placement="top"
            className={glitch.menu}
          >
            <Link
              href=""
              className={glitch.div}
              height="100%"
              width="50px"
            >
              <FaXTwitter />
            </Link>
          </Tooltip>
        </Box>
      </Flex>
      <Box
        height="40px"
        display={{ base: "flex", lg: "none" }}
        justifyContent="center"
        alignItems="center"
        width="100%"
        mt="10px"
      >
        <Tooltip
          label="Telegram Community"
          padding="10px"
          textTransform="uppercase"
          borderRadius="5px"
          transition="none"
          openDelay={500}
          placement="top"
          className={glitch.menu}
        >
          <Link
            href=""
            className={glitch.div}
            height="100%"
            width="55px"
          >
            <RiTelegramLine />
          </Link>
        </Tooltip>
        <Tooltip
          label="Twitter Community"
          padding="10px"
          textTransform="uppercase"
          borderRadius="5px"
          transition="none"
          openDelay={500}
          placement="top"
          className={glitch.menu}
        >
          <Link
            href=""
            className={glitch.div}
            height="100%"
            width="50px"
          >
            <FaXTwitter />
          </Link>
        </Tooltip>
      </Box>
        <Box
          position="absolute"
          background={`url('/Video.gif') center no-repeat`}
          left="0"
          right="0"
          minH="800px"
          zIndex="-100"
          opacity=".1"
          mt="20px"
        ></Box>
      </Flex>
  );
};

export default Intro;
