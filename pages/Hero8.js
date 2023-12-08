import { useEffect, useRef, useState } from 'react';

const Hero8 = () => {
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
        <section  ref={elementRef}
        className={`transition-opacity duration-1000 ease-in-out transform translate-y-1 opacity-0 ${
          visible ? 'opacity-100 translate-y-0' : ''
        }`}>
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl text-center font-semibold text-gray-100 capitalize lg:text-4xl dark:text-white">BRO Bot: Journey Ahead</h1>
        
        
        
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
              

                <h1 class="text-2xl font-semibold text-gray-100 capitalize dark:text-white">Kick-Start:</h1>

                <p class="text-gray-100 dark:text-gray-300">
                   <ul className='mt-12'>
                    <li className=''>Pulse Signals: Alerts on hot pairs.</li>
                      <li className='mt-4'>Precision Orders: Buy/Sell at just the right time.</li>
                     <li className='mt-4'>Swift Auto Sell: No delays, only profits.</li> 

                   </ul>
                </p>

            </div>

            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
              

                <h1 class="text-2xl font-semibold text-gray-100 capitalize dark:text-white">Next Up:</h1>

                <p class="text-gray-100 dark:text-gray-300">
                   <ul className='mt-12'>
                    <li className=''>Web Gateway: BRO Bot, now in your browser.</li>
                      <li className='mt-4'>Multi-Realm Trades: Spanning across blockchains.</li>
                     <li className='mt-4'>Trade Insights: Your trading, deciphered.</li> 

                   </ul>
                </p>

            </div>

            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
              

                <h1 class="text-2xl font-semibold text-gray-100 capitalize dark:text-white">Horizon&apos;s Edge:</h1>

                <p class="text-gray-100 dark:text-gray-300">
                   <ul className='mt-12'>
                    <li className=''>Omni-Platform: From mobile to desktop, we&apos;ve got you.</li>
                      <li className='mt-4'>Wallet Sentinel: Every move, noted.</li>
                     <li className='mt-4'>Trade Mimicry: Follow the masters, reap like them.</li> 

                   </ul>
                </p>

            </div>

           
        </div>
    </div>
</section>

    </>
  )
}

export default Hero8