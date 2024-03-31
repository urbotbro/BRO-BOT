import { useState, useEffect } from "react";
import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(Date.UTC(2024, 3, 1, 14, 0, 0)).getTime(); // April 1st, 2 PM UTC
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number): string => value.toString().padStart(2, '0');

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      mb="150px"
      width="100%"
      maxW="1280px"
    >
      <Heading
        alignSelf="center"
        ml="20px"
        mb="20px"
        style={orbitronFont.style}
        className={glitch.glitchWapper}
        color="#fda007"
      >
        <span
          className={glitch.glitch}
          color="#fda007"
          data-text="Join our Presale"
        >
          Join our Presale
        </span>
      </Heading>
      <Flex flexDirection="column" justify="center" align="center">
        {timeLeft.days !== undefined && timeLeft.days >= 0 && (
          <Button
            as="a"
            href="https://www.pinksale.finance/launchpad/0x696d9fDe0ad616fd463E5c5D2c67F75f8D7c8F22?chain=ETH&refId=0x37950C488Cd8f0f58AA661B7560D1Ba03a608b93"
            target="_blank"
            fontSize="18px"
            background="#fda007" 
            _hover={{ background: "#fda007" }}
            rel="noopener noreferrer"
          >
          Presale
         </Button>

        )}
        <Heading mt="4px">
                starts in
      </Text>
      <Flex>
        <Text fontSize="2xl" mx={2} px={2} py={1} borderRadius="md" bg="#fda007">{formatTime(timeLeft.days)} days</Text>
        <Text fontSize="2xl" mx={2} px={2} py={1} borderRadius="md" bg="#fda007">{formatTime(timeLeft.hours)} hours</Text>
        <Text fontSize="2xl" mx={2} px={2} py={1} borderRadius="md" bg="#fda007">{formatTime(timeLeft.minutes)} minutes</Text>
        <Text fontSize="2xl" mx={2} px={2} py={1} borderRadius="md" bg="#fda007">{formatTime(timeLeft.seconds)} seconds</Text>
      </Flex>
    </Flex>
  );
};

export default CountdownTimer;
