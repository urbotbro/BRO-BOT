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
            link: '',
        },
        {
            title: 'BROTrade Hub',
            comingSoon: false,
            description: 'BRO Trade Hub is a cutting-edge trading ecosystem, blending AI insights, one-click trading, and community wisdom. It is designed for seamless crypto transactions, offering users a dynamic platform for smart, secure, and community-driven trading experiences. Welcome to the future of crypto trading.',
            imgSrc: '/BRO BOT Trade.PNG', // Corrected casing
            link: '',
        },
        {
            title: 'Dashboards',
            comingSoon: false,
            description: 'Token holders can seize a portion of revenue by utilizing this dashboard. Furthermore, you have the option to generate a referral link and collect rewards for successful referrals.',
            imgSrc: '/BRO BOT Dash.PNG',
            link: 'https://revshare.itsurbro.com/',
        },
        {
            title: 'BRO Launchpads',
            comingSoon: false,
            description: 'Step into the world of BRO Launchpad, where the future of crypto takes flight. It\'s not just a platform; it\'s your golden ticket to the most exciting, up-and-coming crypto projects. Imagine getting first dibs on the next big thing in the crypto universe. With Bro Launchpad, that\'s exactly what you get—a front-row seat to innovation and the chance to grow with the giants of tomorrow. Join us, and let\'s discover the potential together. Welcome aboard Bro Launchpad, where your crypto dreams can soar.',
            imgSrc: '/BRO BOT Launch.png',
            link: '',
        },
        {
            title: 'BRO Base',
            comingSoon: false,
            description: 'One of the core utilities of PandaBRO is the ability to allow investors to invest or stake their $BRO, $USDT or $USDC for a specific amount of time and get the agreed-on ROI. Trading pools are generated everyday depending on the supply and demand, and they are limited to use. Only NFT or $BRO holders will be eligible to use our pools. Different NFTs allow access to different pool tiers, generating up to 160% ROI in 14 days (60% net profit). More details will be announced post launch.
 ',
            imgSrc: '/brobase.png',
            link: '',
        },
        {
            title: 'BRO NFT',
            comingSoon: false,
            description: 'Owning a PandaBRO NFT is a luxury leveraging the unique opportunities within the digital asset ecosystem. Not everyone will get to own one due to the limited supply, as only 1000 NFTs will ever be minted. The model is simple, there are only 3 different types of NFTs. All of them provide access to our trading pools, but each tier provides customers with different ROI. More details will be announced post launch. ',
            imgSrc: '/bronft.png',
            link: '',
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
