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
   
    </Flex>
  );
};

export default PresaleComponent;
