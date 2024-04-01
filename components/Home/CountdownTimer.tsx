import { Flex, Button, Heading } from "@chakra-ui/react";
import { Orbitron } from "next/font/google"; 
import glitchStyles from "@/components/Home/glitch.module.css";

// Font style hooks
const orbitronFont = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const PresaleComponent: React.FC = () => {
  return (
    <Flex
      mb="150px"
      width="100%"
      maxW="1280px"
      flexDirection="column"
      justify="center"
      align="center"
    >
      <Heading
        alignSelf="center"
        ml="20px"
        mb="20px"
        style={orbitronFont.style}
        className={glitchStyles.glitchWrapper}
        color="#fda007"
      >
        <span
          className={glitchStyles.glitch}
          data-text="Join our Presale"
        >
          Join our Presale
        </span>
      </Heading>
      <Button
        as="a"
        href="https://www.pinksale.finance/launchpad/ethereum/0x777447297014832b38DB68b470e4b1AdF1092D2e?refId=0x37950C488Cd8f0f58AA661B7560D1Ba03a608b93"
        target="_blank"
        fontSize="18px"
        background="#FDB9C8"
        _hover={{ background: "#FDB9C8" }}
        rel="noopener noreferrer"
      >
        Presale
      </Button>
    </Flex>
  );
};

export default PresaleComponent;
