'use client';
import Header from "@/components/Header";
import Intro from "@/components/Home/Intro";
import Features from "@/components/Home/Features";
import Roadmap from "@/components/Home/Roadmap";
import Signal from "@/components/Home/Signal";
import Footer from "@/components/Footer";
import { Box } from "@chakra-ui/react";
import Boost from "@/components/Home/Boost";
import Webapp from "@/components/Home/Webapp";
import GetStarted from "@/components/Home/GetStarted";
import Loader from "@/components/Home/loader";
import { useState, useEffect } from "react";

export default function Home() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {setLoad(false)}, 5000);
  }, [])
  return (
    <>
    {load ?
    <Loader visibility={load} /> :<>
    <Header />
      <Box as="main" display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
        <Intro />
        <Webapp />
        <GetStarted />
        <Features />
        <Signal />
        <Roadmap />
        <Boost />
      </Box>
      <Footer />
    </>
    }
    </>
  )
}