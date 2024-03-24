import { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-04-02') - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time: number) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <div>
      <Button
        as="a"
        href="https://www.pinksale.finance/launchpad/0x696d9fDe0ad616fd463E5c5D2c67F75f8D7c8F22?chain=ETH&refId=0x37950C488Cd8f0f58AA661B7560D1Ba03a608b93"
        target="_blank"
        mt={{ base: '20px', sm: '4px' }}
        mr={{base: '4px', sm: '2px'}}
        fontSize="18px"
        _hover={{ background: '#fda007' }}
        rel="noopener noreferrer"
      >
        Presale
      </Button> 
      {formatTime(timeLeft.days)}:
      {formatTime(timeLeft.hours)}:
      {formatTime(timeLeft.minutes)}:
      {formatTime(timeLeft.seconds)}
      {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds }
    </div>
  );
};

export default CountdownTimer;
