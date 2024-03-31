import { useState, useEffect } from "react";
import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import { Ubuntu, Orbitron } from "next/font/google"; 
import glitchStyles from "@/components/Home/glitch.module.css"; 

// Font style hooks (assuming these hooks return the correct style objects)
const ubuntuFont = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});
const orbitronFont = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

// TimerBox component
const TimerBox: React.FC<{ unit: string; time: string }> = ({ unit, time }) => (
  <Box textAlign="center" mx="1" px="4" py="2" borderRadius="md" bg="#fda007">
    <Text fontSize="2xl" fontFamily={ubuntuFont.style.fontFamily}>{time}</Text>
    <Text fontSize="sm" fontFamily={ubuntuFont.style.fontFamily}>{unit}</Text>
  </Box>
);

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  useEffect(() => {
    const targetDate = new Date("April 2, 2024 00:00:00").getTime();
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft(): TimeLeft {
    const targetDate = new Date(Date.UTC(2024, 3, 1, 14, 0, 0)).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    return difference > 0 ? {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    } : {};
  }

  function formatTime(value: number): string {
    return value.toString().padStart(2, "0");
  }

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
          color="#fda007"
          data-text="Join our Presale"
        >
          Join our Presale
        </span>
      </Heading>
      <Flex flexDirection="column" justify="center" align="center">
        {Object.keys(timeLeft).length > 0 && (
          <>
            <Button
              as="a"
              href="https://www.pinksale.finance/launchpad/0x696d9fDe0ad616fd463E5c5D2c67F75f8D7c8F22?chain=ETH&refId=0x37950C488Cd8f0f58AA661B7560D1Ba03a608b93"
              target="_blank"
              fontSize="18px"
              background="#FF69B4"
              _hover={{ background: "#FF69B4" }}
              rel="noopener noreferrer"
            >
              Presale
            </Button>
            <Text mt="4px" fontFamily={ubuntuFont.style.fontFamily}>
              starts in
            </Text>
            <Flex flexDirection="row" justify="center" align="center" mt="8px">
              <TimerBox unit="Days" time={formatTime(timeLeft.days ?? 0)} />
              <TimerBox unit="Hours" time={formatTime(timeLeft.hours ?? 0)} />
              <TimerBox unit="Minutes" time={formatTime(timeLeft.minutes ?? 0)} />
              <TimerBox unit="Seconds" time={formatTime(timeLeft.seconds ?? 0)} />
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default CountdownTimer;
