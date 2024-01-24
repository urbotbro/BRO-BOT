import Header from "@/components/Header";
import Intro from "@/components/Home/Intro";
import Features from "@/components/Home/Features";
import Roadmap from "@/components/Home/Roadmap";
import Signal from "@/components/Home/Signal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <Intro />
      <Features />
      <Roadmap />
      <Signal />
    </main>
    <Footer />
    </>
  )
}