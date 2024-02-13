import { Card as ChakraCard, CardBody, CardHeader, Box, CardFooter, Button, Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Link from "next/link";
import { Ubuntu, Orbitron } from "next/font/google";
import { motion } from 'framer-motion';
import glitch from '@/components/Home/glitch.module.css'

const ubuntuFont = Ubuntu({weight: ['300', '400', '500', '700'], subsets: ['latin']})
const orbitronFont = Orbitron({weight: ['400', '500', '600', '700'], subsets: ['latin']})

interface featureList<Type> {
    title: Type;
    description: Type;
    detail: Type[] | null;
}

interface linkList {
  title: string
  comingSoon: boolean
  description: string
  imgSrc: string
  link: string
}

interface imageList {
  imgSrc: string
}

interface phaseList<type> {
  subTitle: type
  desc: type | null
}
interface roadmapList<type> {
  title: type,
  phases: phaseList<type>[]
}

export const Card = ({title, description, detail}: featureList<string>) => {
  return (
    <ChakraCard minHeight={{base:'auto', md: '400px'}} background='#14191e' color='white' border='0.001px solid #ffffff23'>
        <CardHeader>
            <Heading size='md' mt='20px' mb='25px' style={orbitronFont.style}>
              <span>{title}</span>
            </Heading>
        </CardHeader>
        <CardBody>
            <Box mb='40px' fontSize='20px' lineHeight='2'>
              {description}
              {detail ? 
                <ul>
                  {detail.map(elem => (<li key={detail.indexOf(elem)} style={{marginTop:'5px', fontSize: '18px'}}>&bull;{elem}</li>))}
                </ul>
              :
              <></>}
            </Box>
        </CardBody>
    </ChakraCard>
  )
}

export const ImageCard = (props: imageList) => {
  return (
    
        <Box position='absolute' zIndex='10' display='flex' justifyContent='center' alignItems='center' width="95%" height="90%" sx={{
            background: `url('${props.imgSrc}') center`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        }}></Box>
  )
}

export const FullLinkCard = (props: linkList) => {
  return (
    <ChakraCard minH='650px' ml='20px' mr='20px' mb='20px' background='#14191e' color='white' border='0.001px solid #ffffff23' >
      <CardBody>
        {/* <Image borderRadius='lg' width='100%' src={props.imgSrc} alt={props.title}  /> */}
        <Box display='flex' position='relative' justifyContent='center' alignItems='center' width="100%" minHeight="200px">
          <Box position='absolute' zIndex='10' display='flex' justifyContent='center' alignItems='center' width="100%" minHeight="200px" sx={{
          background: `url('${props.imgSrc}') center no-repeat`,
          backgroundSize: 'contain',
          filter: props.comingSoon && 'blur(5px)',
          // opacity: props.comingSoon ? '.25' : '1',
          }}></Box>
          {props.comingSoon ? <Box as="span" zIndex="11" color="#ffffffab" style={orbitronFont.style}>Coming Soon</Box>: <></>}
        </Box>
        <Heading size='md' pt='30px' pb='30px' fontSize='30px' style={orbitronFont.style} className={glitch.glitchWrapper}>
          <span className={glitch.glitch} data-text={props.title}>{props.title}</span>
        </Heading>
        <Box pb='20px' fontSize='18px'>
          {props.description}
        </Box>
      </CardBody>
      <CardFooter alignItems='center'>{ props.comingSoon ? <Box opacity='.4' display='flex' alignItems='center'> Coming Soon</Box> : <Button as={Link} href={props.link} fontSize="14px" borderRadius='50px' background='#cdf6f8' _hover={{
              background: '#9bf0f5'
            }}>Open {props.title}</Button> }</CardFooter>
    </ChakraCard>
  )
}

export const RoadmapCard = (props: roadmapList<string>) => {
  return (
    <ChakraCard as={motion.div} mb='20px' initial={{opacity: 0}} maxW={{base: '100%', md: 'sm'}} whileInView={{opacity: 1, transition: {duration: .5, staggerChildren: 0.07, delayChildren: 0.2}}}  ml='20px' mr='20px' background='#14191e' color='white' border='0.001px solid #ffffff23'>
      <CardHeader>
        <Heading size='lg'pb='10px' pt="10px" style={orbitronFont.style} className={glitch.glitchWrapper}>
          <span className={glitch.glitch} data-text={props.title}>{props.title}</span>
        </Heading>
      </CardHeader>
      <CardBody>
        {props.phases.map(elem => 
          <Box border='0.001px solid #ffffff3a' background="#1d242a" padding='10px' mb='10px' borderRadius='5px' key={`${props.phases.indexOf(elem)}${props.phases.indexOf(elem)}`} pt='10px' pb='10px' fontSize='20px'>{elem.subTitle}{elem.desc ? <>: {elem.desc}</>: <></>}</Box>
        )}
      </CardBody>
    </ChakraCard>
  )
}
