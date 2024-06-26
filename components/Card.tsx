import {
  Box,
  Card as ChakraCard,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import glitch from "@/components/Home/glitch.module.css";

// Assuming the Ubuntu and Orbitron fonts are correctly set up in your project
// If not, ensure you have these fonts imported or available in your project
const ubuntuFont = {
  style: {
    fontFamily: "Ubuntu, sans-serif",
  },
};

const orbitronFont = {
  style: {
    fontFamily: "Orbitron, sans-serif",
  },
};

interface FeatureList<Type> {
  title: Type;
  description: Type;
  detail: Type[] | null;
}

interface LinkList {
  title: string;
  comingSoon: boolean;
  description: string;
  imgSrc: string;
  link: string;
}

interface ImageList {
  imgSrc: string;
}

interface PhaseList<Type> {
  subTitle: Type;
  desc: Type | null;
}

interface RoadmapList<Type> {
  title: Type;
  phases: PhaseList<Type>[];
}

export const Card = ({ title, description, detail }: FeatureList<string>) => {
  return (
    <ChakraCard minHeight={{ base: "auto", md: "400px" }} background="#14191e" color="white" border="0.001px solid #ffffff23">
      <CardHeader>
        <Heading size="md" mt="20px" mb="25px" style={orbitronFont.style}>
          {title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Box mb="40px" fontSize="20px" lineHeight="2">
          {description}
          {detail ? (
            <ul>
              {detail.map((elem, index) => (
                <li key={index} style={{ marginTop: "5px", fontSize: "18px" }}>
                  &bull; {elem}
                </li>
              ))}
            </ul>
          ) : null}
        </Box>
      </CardBody>
    </ChakraCard>
  );
};

export const ImageCard = ({ imgSrc }: ImageList) => {
  return (
    <Box position="absolute" zIndex="10" display="flex" justifyContent="center" alignItems="center" width="95%" height="90%" sx={{
      background: `url('${imgSrc}') center`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }}></Box>
  );
};

export const FullLinkCard = ({ title, comingSoon, description, imgSrc, link }: LinkList) => {
  const buttonText = (() => {
    switch (title) {
      case "BRO Sniper Bot":
        return "Available";
       case "BRO Signal Bot":
        return "Available";
      case "BroTrade Hub":
        return "Soon";
      case "Bro Launchpads":
        return "Soon";
      case "Dashboards":
        return "Open Dashboards";
       case "Bro Base":
        return "Soon";
        case "Bro NFT":
        return "Soon";
    }
  })();

  return (
    <ChakraCard minH="650px" ml="20px" mr="20px" mb="20px" background="#14191e" color="white" border="0.001px solid #ffffff23">
      <CardBody>
        <Box display="flex" position="relative" justifyContent="center" alignItems="center" width="100%" minHeight="200px">
          <Box position="absolute" zIndex="10" display="flex" justifyContent="center" alignItems="center" width="100%" minHeight="200px" sx={{
            background: `url('${imgSrc}') center no-repeat`,
            backgroundSize: 'contain',
            filter: comingSoon ? 'blur(5px)' : 'none',
          }}></Box>
          {comingSoon && <Box as="span" zIndex="11" color="#ffffffab" style={orbitronFont.style}>Coming Soon</Box>}
        </Box>
        <Heading size="md" pt="30px" pb="30px" fontSize="30px" style={orbitronFont.style} className={glitch.glitchWrapper}>
          <span className={glitch.glitch} data-text={title}>{title}</span>
        </Heading>
        <Box pb="20px" fontSize="18px">
          {description}
        </Box>
      </CardBody>
      <CardFooter alignItems="center">
        {!comingSoon && (
          <Button as={Link} href={link} fontSize="14px" borderRadius="50px" background="#fda007" _hover={{
            background: "#fda007",
          }}>
            {buttonText}
          </Button>
        )}
      </CardFooter>
    </ChakraCard>
  );
};

export const RoadmapCard = ({ title, phases }: RoadmapList<string>) => {
  return (
    <ChakraCard as={motion.div} mb="20px" initial={{ opacity: 0 }} maxW={{ base: "100%", md: "sm" }} whileInView={{ opacity: 1, transition: { duration: .5, staggerChildren: 0.07, delayChildren: 0.2 } }} ml="20px" mr="20px" background="#14191e" color="white" border="0.001px solid #ffffff23">
      <CardHeader>
        <Heading size="lg" pb="10px" pt="10px" style={orbitronFont.style} className={glitch.glitchWrapper}>
          <span className={glitch.glitch} data-text={title}>{title}</span>
        </Heading>
      </CardHeader>
      <CardBody>
        {phases.map((elem, index) => (
          <Box border="0.001px solid #ffffff3a" background="#1d242a" padding="10px" mb="10px" borderRadius="5px" key={index} pt="10px" pb="10px" fontSize="20px">
            {elem.subTitle}{elem.desc ? <>: {elem.desc}</> : null}
          </Box>
        ))}
      </CardBody>
    </ChakraCard>
  );
};
