import { useEffect, useRef, useState } from 'react';

const Hero5 = () => {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef();

  const handleScroll = () => {
    const element = elementRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      setVisible(rect.top < window.innerHeight - 100);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>

    <section   ref={elementRef}
    className={`transition-opacity duration-1000 ease-in-out transform translate-y-1 opacity-0 ${
      visible ? 'opacity-100 translate-y-0' : ''
    }`}>
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-100 sm:text-4xl lg:text-5xl">
              How to Accumulate BRO
            </h1>
            <p className="max-w-md mx-auto mt-6 text-base font-normal leading-7 text-gray-100">
              By utilizing BRO Bot, you stand to automatically earn $BRO tokens for:
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full gap-8 justify-around pb-8 mt-12 sm:mt-16 lg:mt-14 overflow-x-auto sm:overflow-x-hidden">
          <div className="relative snap-center scroll-ml-6 shrink-0  last:pr-6">
            <div className="overflow-hidden w-full sm:w-full lg:w-[200px] transition-all duration-200 transform border border-gray-200 rounded-2xl hover:shadow-lg">
              <div className="px-4 py-5 sm:p-5">
                <div className="flex items-start lg:items-center">
                  <div className="flex-1 ml-4 lg:ml-6">
                    <p className="mt-2 text-sm font-bold text-gray-100 lg:text-lg group-hover:text-gray-600">
                      🤖 Manual purchases
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div className="overflow-hidden w-full sm:w-full lg:w-[200px] transition-all duration-200 transform border border-gray-200 rounded-2xl hover:shadow-lg">
              <div className="px-4 py-5 sm:p-5">
                <div className="flex items-start lg:items-center">
                  <div className="flex-1 ml-4 lg:ml-6">
                    <p className="mt-2 text-sm font-bold text-gray-100 lg:text-lg group-hover:text-gray-600">
                      🤖 Auto-detections
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div className="overflow-hidden w-full sm:w-full lg:w-[200px] transition-all duration-200 transform border border-gray-200 rounded-2xl hover:shadow-lg">
              <div className="px-4 py-5 sm:p-5">
                <div className="flex items-start lg:items-center">
                  <div className="flex-1 ml-4 lg:ml-6">
                    <p className="mt-2 text-sm font-bold text-gray-100 lg:text-lg group-hover:text-gray-600">
                      🤖 Sales transactions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 ">
            <div className="overflow-hidden w-full sm:w-full lg:w-[200px] transition-all duration-200 transform border border-gray-200 rounded-2xl hover:shadow-lg">
              <div className="px-4 py-5 sm:p-5">
                <div className="flex items-start lg:items-center">
                  <div className="flex-1 ml-4 lg:ml-6">
                    <p className="mt-2 text-sm font-bold text-gray-100 lg:text-lg group-hover:text-gray-600">
                      🤖 Setting limit orders
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="max-w-md mx-auto text-center mt-6 text-base font-normal leading-7 text-gray-100">
          Receive automated $BRO rewards, which can be viewed and claimed directly via our Telegram bot interface. Your $BRO rewards are computed based on a specific multiplier applied to the volume transacted through our bot.
        </p>
      </section>
      </section>
    </>
  );
};

export default Hero5;
