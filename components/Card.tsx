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

export const Card = ({title, description}: featureList<string>) => {
  return (
    <ChakraCard maxW='sm'>
        <CardHeader>
            <Heading>{title}</Heading>
        </CardHeader>
        <CardBody>
            <Box>{description}</Box>
        </CardBody>
    </ChakraCard>
  )
}

export const FullLinkCard = (props: linkList) => {
  return (
    <ChakraCard maxW='sm' ml='20px' mr='20px'>
      <CardBody>
        <Image borderRadius='lg' src={props.imgSrc} alt={props.title}  />
        <Heading size='md' pt='20px' pb='20px'>{props.title}</Heading>
        <Box pb='20px'>
          {props.description}
        </Box>
      </CardBody>
      <CardFooter display='flex' alignItems='center'>{ props.comingSoon ? <Box opacity='.4' display='flex' alignItems='center'> Coming Soon</Box> : <Button as={Link} href={props.link}>Open {props.title}</Button> }</CardFooter>
    </ChakraCard>
  )
}
