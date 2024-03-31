import { useState, useEffect } from "react";
import { Flex, Heading, Button, Box, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const CountdownTimer: React.FC = () => {
  // ... (rest of your component setup)

  return (
    <Flex
      mb="150px"
      width="100%"
      maxW="1280px"
      flexDirection="column"
      justify="center"
      align="center"
    >
      <Heading as="h2" size="xl" mb="4" color="#fda007" className="glitch">
        Join our Presale
      </Heading>
      <NextLink href="https://www.pinksale.finance/launchpad/0x696d9fDe0ad616fd463E5c5D2c67F75f8D7c8F22?chain=ETH&refId=0x37950C488Cd8f0f58AA661B7560D1Ba03a608b93" passHref>
        <Button as="a" colorScheme="orange" mb="4" target="_blank" rel="noopener noreferrer">
          Presale
        </Button>
      </NextLink>
      <Text fontSize="xl" mb="4">
        Presale starts in
      </Text>
      {/* ... (your countdown display logic) */}
    </Flex>
  );
};

export default CountdownTimer;
