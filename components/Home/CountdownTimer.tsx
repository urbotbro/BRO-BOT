import { useState, useEffect } from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { Ubuntu, Orbitron } from "next/font/google";
import glitch from "@/components/Home/glitch.module.css";

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

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft(): TimeLeft {
    const targetDate = new Date(Date.UTC(2024, 3, 1, 14, 0, 0)).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return {};
    }
  }

  function formatTime(value: number): string {
    return value.toString().padStart(2, '0');
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
            </Heading>
        {timeLeft.days !== undefined && timeLeft.days > 0 && (
          <Flex flexDirection="row" justify="cenetr" align="center" mt="8px">
            <Heading mt="4px" background="#fda007" padding="4px" mr="1px" ml="1px" borderRadius="10px">
              {formatTime(timeLeft.days || 0)}
            </Heading>
            <Heading mt="4px">
              :
            </Heading>
            <Heading background="#fda007" padding="4px" mt="4px" mr="1px" ml="1px" borderRadius="10px">
              {formatTime(timeLeft.hours || 0)}
            </Heading>
            <Heading mt="4px">
              :
            </Heading>
            <Heading background="#fda007" padding="4px" mt="4px" mr="1px" ml="1px" borderRadius="10px">
              {formatTime(timeLeft.minutes || 0)}
            </Heading>
            <Heading mt="4px">
              :
            </Heading>
            <Heading background="#fda007" padding="4px" mt="4px" mr="1px" ml="1px" borderRadius="10px">
              {formatTime(timeLeft.seconds || 0)}
            </Heading>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default CountdownTimer;
