import React from "react";
import { motion } from "framer-motion";

const Tokenomics = () => {
  return (
    <>
      <section id="token" className="border-b-2 border-[#FF4B90] bg-white">
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="container px-6 py-16 mx-auto lg:py-24"
        >
          <div className="grid mx-auto lg:grid-cols-2 max-w-[1300px] w-full items-center gap-8">
            <div className="grid gap-8 mx-auto lg:gap-16">
              <h1 className="mx-auto text-3xl font-days lg:text-[52px]">
                Tokenomics
              </h1>
              <img className=" max-w-[400px] w-full mx-auto" src="/chart.png" />
            </div>
            <div className="grid items-center w-full mx-auto gap-11 ">
              <div className="grid grid-cols-2 gap-8 mx-auto lg:gap-16">
                <div className="grid gap-12">
                  <div className="space-y-3 ">
                    <h1 className=" font-light font-inter text-xl md:text-2xl">
                      Presale
                    </h1>
                    <div className="bg-[#E6E8EC] h-[1px] min-w-[180px] w-full" />
                    <h2 className="text-[#7F56D9] font-inter font-bold md:text-3xl text-2xl">
                      40.0000 %
                    </h2>
                  </div>
                  <div className="space-y-3 ">
                    <h1 className="text-xl md:text-2xl font-light font-inter ">
                      Team
                    </h1>
                    <div className="bg-[#E6E8EC] h-[1px] min-w-[180px] w-full" />
                    <h2 className="text-[#EA7000] font-inter font-bold md:text-3xl text-2xl">
                      10.00 %
                    </h2>
                  </div>
                  <div className="space-y-3 ">
                    <h1 className="text-xl md:text-2xl font-light font-inter">
                      Ecosystem
                    </h1>
                    <div className="bg-[#E6E8EC] h-[1px] min-w-[180px] w-full" />
                    <h2 className="text-[#1A9FFF] font-inter font-bold md:text-3xl text-2xl">
                      12.50 %
                    </h2>
                  </div>
                </div>
                <div className="grid gap-12">
                  <div className="space-y-3 ">
                    <h1 className="text-xl md:text-2xl font-light font-inter ">
                      Liquidity
                    </h1>
                    <div className="bg-[#E6E8EC] h-[1px] min-w-[180px] w-full" />
                    <h2 className="text-[#4B5DFF] font-inter font-bold md:text-3xl text-2xl">
                      22.8000 %
                    </h2>
                  </div>
                  <div className="space-y-3 ">
                    <h1 className="text-xl md:text-2xl font-light font-inter ">
                      Holdback
                    </h1>
                    <div className="bg-[#E6E8EC] h-[1px] min-w-[180px] w-full" />
                    <h2 className="text-[#FFBE41] font-inter font-bold md:text-3xl text-2xl">
                      10.00 %
                    </h2>
                  </div>
                  <div className="space-y-3 ">
                    <h1 className="text-xl md:text-2xl font-light font-inter ">
                      Staking
                    </h1>
                    <div className="bg-[#E6E8EC] h-[1px] min-w-[180px] w-full" />
                    <h2 className="text-[#CE1BB1] font-inter font-bold md:text-3xl text-2xl">
                      4.7000 %
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-3 p-4 mx-auto bg-[#45B26B] max-w-[400px] w-full rounded-xl">
                <h1 className="text-xl font-light text-white font-inter">
                  Total Supply
                </h1>
                <div className="bg-[#E6E8EC] h-[30px] w-[1px]" />
                <h2 className="text-2xl font-bold text-white font-inter">
                  100.00000%
                </h2>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Tokenomics;
