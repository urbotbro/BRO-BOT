import { Box, Flex, Button } from "@chakra-ui/react";
import { Orbitron } from "next/font/google";
import glitch from "@/components/Home/glitch.module.css";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "@chakra-ui/next-js";
import { ImageCard } from "../Card";

const orbitronFont = Orbitron({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const Sliders = () => {
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
        <Box mt={{ base: '100px' }}  width="100%" maxWidth='1280px' pl='20px' pr='20px'>

            <Flex mt='50px' flexDirection='column' alignItems="center" border='0.0001px solid #ffffff37' padding='20px' borderRadius='10px' display='flex' position='relative' width="100%" minHeight={{ base: '300px', md: "600px" }}>

                <Box position='absolute' zIndex='10' width="100%" height="100%">
                    <Slider {...settings}>
                        {imageOptions.map((elem, index) => (
                            <Box key={index} position="relative" margin="10px" minHeight={{ base: '250px', md: "600px" }}>
                                <ImageCard imgSrc={elem.imgSrc} />
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Flex>
            <Box display='flex' alignItems='center' justifyContent='center' pt='30px' pb='20px' fontSize='18px'>
                <span className={glitch.glitch}>For More Visit </span>
                <Button as={Link} href="https://tradewithbro.com" fontSize="18px" _hover={{
                    background: '#9bf0f5'
                }}>tradewithbro.com</Button>
            </Box>
        </Box>
    )
}

export default Sliders;
