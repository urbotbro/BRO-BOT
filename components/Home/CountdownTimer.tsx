import { useState, useEffect } from 'react';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';

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
      <Heading as="h2" size="xl" mb={4} color="#fda007" className="glitch">Join our Presale</Heading>
      <Button
        colorScheme="orange"
        mb={4}
        href="https://www.pinksale.finance/launchpad/0x696d9fDe0ad616fd463E5c5D2c67F75f8D7c8F22?chain=ETH&refId=0x37950C488Cd8f0f58AA661B7560D1Ba03a608b93"
        isExternal
      >
        Presale
      </Button>
      <Text fontSize="xl" mb={4}>Presale starts in</Text>
      <Flex>
        <Text fontSize="xl" mx={2} background="#fda007" px={2} py={1} borderRadius="md">{formatTime(timeLeft.days)}</Text>
        <Text fontSize="xl" mx={2}>:</Text>
        <Text fontSize="xl" mx={2} background="#fda007" px={2} py={1} borderRadius="md">{formatTime(timeLeft.hours)}</Text>
        <Text fontSize="xl" mx={2}>:</Text>
        <Text fontSize="xl" mx={2} background="#fda007" px={2} py={1} borderRadius="md">{formatTime(timeLeft.minutes)}</Text>
        <Text fontSize="xl" mx={2}>:</Text>
        <Text fontSize="xl" mx={2} background="#fda007" px={2} py={1} borderRadius="md">{formatTime(timeLeft.seconds)}</Text>
      </Flex>
    </Flex>
  );
};

export default CountdownTimer;
