'use client';
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { FullLinkCard } from "../Card";
import { motion } from 'framer-motion';

const GetStarted = () => {
    const startOptions = [
        {
            title: 'Telegram Bot',
            comingSoon: false,
            description: 'Elevate your trading game with the BRO Telegram Bot – your intelligent companion in the world of finance. Enhance your gains, execute trades swiftly, seize opportunities early, and monitor real-time profits.',
            imgSrc: '/BRO BOT Dash.png',
            link: '/#',
        },
        {
            title: 'BroTrade Hub',
            comingSoon: true,
            description: 'Bro Trade Hub is a cutting-edge trading ecosystem, blending AI insights, one-click trading, and community wisdom. It's designed for seamless crypto transactions, offering users a dynamic platform for smart, secure, and community-driven trading experiences. Welcome to the future of crypto trading.',
            imgSrc: '/BRO BOT Dash.png',
            link: '/#',
        },
        {
            title: 'Dashboard',
            comingSoon: false,
            description: 'Token holders can seize a portion of revenue by utilizing this dashboard. Furthermore, you have the option to generate a referral link and collect rewards for successful referrals.',
            imgSrc: '/BRO BOT Dash.png',
            link: 'https://bro-dashboard-gules.vercel.app/',
        },
    ]
  return (
    <SimpleGrid mt={{base: '100px'}} justifySelf='center' id='get-started' columns={{base: 1, md: 2, lg: 3}} spacing='5' justifyContent={{base: 'center', md: 'flex-start'}} width="100%" maxWidth='1280px'>
        {startOptions.map(elem => <FullLinkCard key={startOptions.indexOf(elem)} title={elem.title} comingSoon={elem.comingSoon} description={elem.description} imgSrc={elem.imgSrc} link={elem.link}  />)}
    </SimpleGrid>
  )
}

export default GetStarted
