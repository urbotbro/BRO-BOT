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
            title: 'Bro Launchpad',
            comingsoon: true,
            description: 'step into Bro Launchpad, your portal to the future of cryptocurrency. Here, access to groundbreaking projects awaits you, offering a first look at crypto giants. This is where opportunity meets potential, inviting you to be part of the next big wave in the crypto space. Join Bro Launchpad and turn possibilities into realities. Welcome to where your crypto journey takes off.',
            imgsrc: '/BRO BOT Dash.png',
            link: '/#',
        },
        {
            title: 'Dashboard',
            comingSoon: false,
            description: 'Token holders can seize a portion of revenue by utilizing this dashboard. Furthermore, you have the option to generate a referral link and collect rewards for successful referrals.',
            imgSrc: '/BRO BOT Dash.png',
            link: 'https://dashboard.itsurbro.com/',
        },
    ]
  return (
    <SimpleGrid mt={{base: '100px'}} justifySelf='center' id='get-started' columns={{base: 1, md: 2, lg: 3}} spacing='5' justifyContent={{base: 'center', md: 'flex-start'}} width="100%" maxWidth='1280px'>
        {startOptions.map(elem => <FullLinkCard key={startOptions.indexOf(elem)} title={elem.title} comingSoon={elem.comingSoon} description={elem.description} imgSrc={elem.imgSrc} link={elem.link}  />)}
    </SimpleGrid>
  )
}

export default GetStarted
