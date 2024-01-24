'use client';
import { Box, Flex } from "@chakra-ui/react";
import { FullLinkCard } from "../Card";

const GetStarted = () => {
    const startOptions = [
        {
            title: 'Telegram Bot',
            comingSoon: false,
            description: '',
            imgSrc: '',
            link: '/#',
        },
        {
            title: 'Web App',
            comingSoon: true,
            description: '',
            imgSrc: '',
            link: '',
        },
        {
            title: 'Dashboard',
            comingSoon: false,
            description: '',
            imgSrc: '',
            link: '',
        },
    ]
  return (
    <Flex>
        {startOptions.map(elem => <FullLinkCard key={startOptions.indexOf(elem)} title={elem.title} comingSoon={elem.comingSoon} description={elem.description} imgSrc={elem.imgSrc} link={elem.link}  />)}
    </Flex>
  )
}

export default GetStarted