'use client';
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { FullLinkCard } from "../Card";
import { motion } from 'framer-motion';

const GetStarted = () => {
    const startOptions = [
        {
            title: 'BRO Sniper Bot',
            comingSoon: false,
            description: 'Elevate your trading game with the BRO Telegram Bot – your intelligent companion in the world of finance. Enhance your gains, execute trades swiftly, seize opportunities early, and monitor real-time profits.',
            imgSrc: '/BRO SNIPER BOT.png',
            link: '/#',
        },
        {
            title: 'BroTrade Hub',
            comingSoon: false, // Corrected to ensure consistency and proper casing
            description: 'Bro Trade Hub is a cutting-edge trading ecosystem, blending AI insights, one-click trading, and community wisdom. It is designed for seamless crypto transactions, offering users a dynamic platform for smart, secure, and community-driven trading experiences. Welcome to the future of crypto trading.',
            imgSrc: '/BRO BOT Trade.png', // Corrected casing
            link: 'https://tradewithbro.com',
        },
        {
            title: 'Dashboards',
            comingSoon: false,
            description: 'Token holders can seize a portion of revenue by utilizing this dashboard. Furthermore, you have the option to generate a referral link and collect rewards for successful referrals.',
            imgSrc: '/BRO BOT Dash.png',
            link: 'https://dashboard.itsurbro.com/',
        },
        {
            title: 'Bro Launchpads',
            comingSoon: false,
            description: 'Step into the world of Bro Launchpad, where the future of crypto takes flight. It\'s not just a platform; it\'s your golden ticket to the most exciting, up-and-coming crypto projects. Imagine getting first dibs on the next big thing in the crypto universe. With Bro Launchpad, that\'s exactly what you get—a front-row seat to innovation and the chance to grow with the giants of tomorrow. Join us, and let\'s discover the potential together. Welcome aboard Bro Launchpad, where your crypto dreams can soar.',
            imgSrc: '/BRO BOT Launch.png', // Ensured correct property name
            link: 'https://tradewithbro.com/pages/launch.html',
        },
    ];

    return (
        <Box width="100%" maxWidth="1280px" mx="auto" mt="40px">
            <Flex direction="column" align="center" justify="center" mb="40px">
            </Flex>
            <SimpleGrid mt="20px" justifySelf="center" id="get-started" columns={{base: 1, md: 2, lg: 3}} spacing="5" justifyContent={{base: "center", md: "flex-start"}}>
                {startOptions.map((elem, index) => (
                    <FullLinkCard key={index} title={elem.title} comingSoon={elem.comingSoon} description={elem.description} imgSrc={elem.imgSrc} link={elem.link} />
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default GetStarted;
