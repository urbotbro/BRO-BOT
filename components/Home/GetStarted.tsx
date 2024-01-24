'use client';
import { Box, Flex } from "@chakra-ui/react";
import { FullLinkCard } from "../Card";

const GetStarted = () => {
    const startOptions = [
        {
            title: 'Telegram Bot',
            comingSoon: false,
            description: 'Elevate your trading game with the BRO Telegram Bot – your intelligent companion in the world of finance. Enhance your gains, execute trades swiftly, seize opportunities early, and monitor real-time profits.',
            imgSrc: '',
            link: '/#',
        },
        {
            title: 'Web App',
            comingSoon: true,
            description: 'Embark on a seamless trading experience with our innovative Webapp! Delight in familiar Telegram features and a host of extras—effortlessly manage portfolios, establish watchlists, and tailor your interface for a personalized journey through the markets.',
            imgSrc: '',
            link: '/#',
        },
        {
            title: 'Dashboard',
            comingSoon: false,
            description: 'Token holders can seize a portion of revenue by utilizing this dashboard. Furthermore, you have the option to generate a referral link and collect rewards for successful referrals.',
            imgSrc: '',
            link: '/#',
        },
    ]
  return (
    <Flex width="100%" maxWidth='1280px' justify='center'>
        {startOptions.map(elem => <FullLinkCard key={startOptions.indexOf(elem)} title={elem.title} comingSoon={elem.comingSoon} description={elem.description} imgSrc={elem.imgSrc} link={elem.link}  />)}
    </Flex>
  )
}

export default GetStarted