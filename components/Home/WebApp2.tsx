import { Box, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageCard } from "../Card";
import glitch from '@/components/Home/glitch.module.css';
import { Orbitron } from "next/font/google";

const orbitronFont = Orbitron({weight: ['400', '500', '600', '700'], subsets: ['latin']});

const Webapp2 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const imageOptions = [
        { imgSrc: '/BRO BOT Trade.png' },
        { imgSrc: '/BRO BOT Bridge.png' },
        { imgSrc: '/BRO BOT Launch.png' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current: number) => setCurrentSlide(current),
    };

    return (
        <Box mt={{base: '100px'}}  maxWidth="1280px" mx="auto" border='0.0001px solid #ffffff37' padding='20px' borderRadius='10px' >
            <Slider {...settings}>
                {imageOptions.map((elem, index) => (
                    <Box key={index}>
                        <ImageCard imgSrc={elem.imgSrc} />
                    </Box>
                ))}
            </Slider>
            <Box display='flex' alignItems='center' justifyContent='center' pt='30px' pb='20px' fontSize='18px'>
                <span className={glitch.glitch}>For More Visit </span>
                <Button as={Link}  href="https://tradewithbro.com" fontSize="18px" _hover={{
                    background: '#9bf0f5'
                }}>TradeWithBro</Button> 
            </Box>
        </Box>
    );
};

export default Webapp2;
