import { Card as ChakraCard, CardBody, CardHeader, Box, CardFooter, Button, Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Link from "next/link";

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
    <ChakraCard maxW='sm' background='#14191e' color='white'>
        <CardHeader>
            <Heading size='md' mb='20px'>{title}</Heading>
        </CardHeader>
        <CardBody>
            <Box mb='40px'>{description}</Box>
        </CardBody>
    </ChakraCard>
  )
}

export const FullLinkCard = (props: linkList) => {
  return (
    <ChakraCard maxW='sm' ml='20px' mr='20px' background='#14191e' color='white'>
      <CardBody>
        <Image borderRadius='lg' width='100%' src={props.imgSrc} alt={props.title}  />
        <Heading size='md' pt='20px' pb='20px'>{props.title}</Heading>
        <Box pb='20px'>
          {props.description}
        </Box>
      </CardBody>
      <CardFooter display='flex' alignItems='center'>{ props.comingSoon ? <Box opacity='.4' display='flex' alignItems='center'> Coming Soon</Box> : <Button as={Link} href={props.link}>Open {props.title}</Button> }</CardFooter>
    </ChakraCard>
  )
}

export const RoadmapCard = (props: roadmapList<string>) => {
  return (
    <ChakraCard maxW='sm' ml='20px' mr='20px' background='#14191e' color='white'>
      <CardHeader>
        <Heading>{props.title}</Heading>
      </CardHeader>
      <CardBody>
        {props.phases.map(elem => 
          <Box key={`${props.phases.indexOf(elem)}${props.phases.indexOf(elem)}`} pt='10px' pb='10px'>{elem.subTitle}: {elem.desc}</Box>
        )}
      </CardBody>
    </ChakraCard>
  )
}