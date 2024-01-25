import { Card as ChakraCard, CardBody, CardHeader, Box, CardFooter, Button, Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Link from "next/link";
import { Ubuntu } from "next/font/google";
import { motion } from 'framer-motion';
import glitch from '@/components/Home/glitch.module.css'

const ubuntuFont = Ubuntu({weight: ['300', '400', '500', '700'], subsets: ['latin']})

interface featureList<Type> {
    title: Type;
    description: Type;
}

interface linkList {
  title: string
  comingSoon: boolean
  description: string
  imgSrc: string
  link: string
}
interface phaseList<type> {
  subTitle: type
  desc: type
}
interface roadmapList<type> {
  title: type,
  phases: phaseList<type>[]
}

export const Card = ({title, description}: featureList<string>) => {
  return (
    <ChakraCard maxW='sm' background='#14191e' color='white' border='0.001px solid #ffffff23'>
        <CardHeader>
            <Heading size='md' mt='20px' mb='25px' style={ubuntuFont.style}>
              <span>{title}</span>
            </Heading>
        </CardHeader>
        <CardBody>
            <Box mb='40px' fontSize='20px' lineHeight='2'>{description}</Box>
        </CardBody>
    </ChakraCard>
  )
}

export const FullLinkCard = (props: linkList) => {
  return (
    <ChakraCard maxW='sm' ml='20px' mr='20px' background='#14191e' color='white' border='0.001px solid #ffffff23'>
      <CardBody>
        <Image borderRadius='lg' width='100%' src={props.imgSrc} alt={props.title}  />
        <Heading size='md' pt='30px' pb='30px' fontSize='30px' style={ubuntuFont.style} className={glitch.glitchWrapper}>
          <span className={glitch.glitch} data-text={props.title}>{props.title}</span>
        </Heading>
        <Box pb='20px' fontSize='20px'>
          {props.description}
        </Box>
      </CardBody>
      <CardFooter display='flex' alignItems='center'>{ props.comingSoon ? <Box opacity='.4' display='flex' alignItems='center'> Coming Soon</Box> : <Button as={Link} href={props.link} fontSize="14px" borderRadius='50px' background='#cdf6f8' _hover={{
              background: '#9bf0f5'
            }}>Open {props.title}</Button> }</CardFooter>
    </ChakraCard>
  )
}

export const RoadmapCard = (props: roadmapList<string>) => {
  return (
    <ChakraCard as={motion.div} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: .5, staggerChildren: 0.07, delayChildren: 0.2}}} maxW='sm' ml='20px' mr='20px' background='#14191e' color='white' border='0.001px solid #ffffff23'>
      <CardHeader>
        <Heading style={ubuntuFont.style} className={glitch.glitchWrapper}>
          <span className={glitch.glitch} data-text={props.title}>{props.title}</span>
        </Heading>
      </CardHeader>
      <CardBody as={motion.div} initial={{opacity: 0.6}} whileInView={{opacity: 1, transition: {duration: .5, staggerChildren: 0.07, delayChildren: 0.2}}}>
        {props.phases.map(elem => 
          <Box border='0.001px solid #ffffff3a' background="#1d242a" padding='10px' mb='10px' borderRadius='5px' key={`${props.phases.indexOf(elem)}${props.phases.indexOf(elem)}`} pt='10px' pb='10px' fontSize='20px'>{elem.subTitle}: {elem.desc}</Box>
        )}
      </CardBody>
    </ChakraCard>
  )
}