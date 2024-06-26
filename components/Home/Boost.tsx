import React from "react";
import dextools from "/dextools.png";
import moon from "/moon.png";
import scr from "/scr.png";
import pinksale from "/pinksale.png";
import solid from "/solid.png";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <>
      <section className="py-14 lg:py-24 bg-white">
        <h1 className="pb-10 text-3xl text-center md:text-4xl font-days lg:text-5xl">
          Partners
        </h1>
        <Marquee className="">
          <div className="flex justify-center items-center gap-16">
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={pinksale} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={dextools} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={scr} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={moon} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[170px] " src={solid} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={pinksale} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={dextools} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={scr} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={moon} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[170px] " src={solid} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={pinksale} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={dextools} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={scr} />
            </a>
            <a href="/">
              <img className="md:max-w-[250px] max-w-[150px] " src={moon} />
            </a>
            <a href="/">
              <img
                className="md:max-w-[250px] max-w-[170px] pr-16"
                src={solid}
              />
            </a>
          </div>
        </Marquee>
      </section>
    </>
  );
};

export default Partners;
