import { Card as ChakraCard, CardBody, CardHeader, Box, CardFooter, Button } from "@chakra-ui/react";
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
    <ChakraCard>
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
    <ChakraCard>
      <CardHeader>
        <Heading>{props.title}</Heading>
      </CardHeader>
      <CardBody>{props.description}</CardBody>
      <CardFooter>{ props.comingSoon ? <></> : <Button as={Link} href={props.link}>Open {props.title}</Button> }</CardFooter>
    </ChakraCard>
  )
}
