import { useState, useEffect } from "react";
import { Flex, Heading, Button, Box, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import glitchStyles from "@/components/Home/glitch.module.css"; //
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
      px={{ base: "4", md: "8" }}
    >
      <Box className={`${glitchStyles.glitch} ${glitchStyles.whiteText}`} mb="4">
        <Heading as="h2" size="xl" textAlign="center">
          Join our Presale
        </Heading>
      </Box>
      <NextLink href="https://www.pinksale.finance/launchpad/0x696d9fDe0ad616fd463E5c5D2c67F75f8D7c8F22?chain=ETH&refId=0x37950C488Cd8f0f58AA661B7560D1Ba03a608b93" passHref>
        <Button as="a" backgroundColor="#FFC2FF" mb="4" target="_blank" rel="noopener noreferrer">
          Presale
        </Button>
      </NextLink>
      <Text fontSize="xl" mb="4">
          starts in
      </Text>
      <Flex
        direction="row"
        justify="center"
        wrap="nowrap"
        overflowX="auto"
      >
        <TimerBox unit="days" time={formatTime(timeLeft.days)} />
        <TimerBox unit="hours" time={formatTime(timeLeft.hours)} />
        <TimerBox unit="minutes" time={formatTime(timeLeft.minutes)} />
        <TimerBox unit="seconds" time={formatTime(timeLeft.seconds)} />
      </Flex>
    </Flex>
  );
};

const TimerBox = ({ unit, time }) => (
  <Flex
    flexDirection="column"
    mx="2"
    my="1"
    px="4"
    py="2"
    borderRadius="md"
    bg="#fda007"
    alignItems="center"
    justifyContent="center"
  >
    <Text fontSize="2xl">{time}</Text>
    <Text fontSize="sm">{unit}</Text>
  </Flex>
);

export default CountdownTimer;
