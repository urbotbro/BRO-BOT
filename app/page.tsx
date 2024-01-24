'use client';
import Header from "@/components/Header";
import Intro from "@/components/Home/Intro";
import Features from "@/components/Home/Features";
import Roadmap from "@/components/Home/Roadmap";
import Signal from "@/components/Home/Signal";
import Footer from "@/components/Footer";
import { Box } from "@chakra-ui/react";
import Boost from "@/components/Home/Boost";
import GetStarted from "@/components/Home/GetStarted";

export default function Home() {
  return (
    <>
    <Header />
    <Box as="main" display='flex' alignItems='center' flexDirection='column'>
      <Intro />
      <GetStarted />
      <Features />
      <Roadmap />
      <Signal />
      <Boost />
    </Box>
    <Footer />
    </>
  )
}