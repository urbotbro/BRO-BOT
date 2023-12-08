import { useEffect, useRef, useState } from 'react';

const Hero7 = () => {
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
<div class="relative w-full h-full">
  <div class="absolute hidden w-full  lg:block h-96"></div>
  <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-1 lg:pb-16">
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      {/* <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
         
          <span class="relative">Affordable</span>
        </span>
        for everyone
      </h2> */}
      {/* <p class="text-base text-gray-700 md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
      </p> */}
    </div>
    <div class="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
      <div>
        <div class="p-8 bg-gray-900 rounded">
          <div class="mb-4 text-center">
            <p class="text-xl font-medium tracking-wide text-white">
            Manual Purchase with BRO Bot
            </p>
            <div class="flex items-center justify-center">
              <p class="mr-2 text-xl font-semibold text-white lg:text-xxl">
              Fees: 0.45%
              </p>
              
            </div>
          </div>
          <ul class="mb-8 space-y-2">
          <p class="font-medium text-gray-300">
          Features:
</p>
            <li class="flex items-center">
              
              <p class="font-medium text-gray-300">
Anti-Scam Mechanisms
</p>
            </li>
            <li class="flex items-center">
             
              <p class="font-medium text-gray-300">Limited to 5 Wallets for Enhanced Security</p>
            </li>
            <li class="flex items-center">
            
            
              <p class="font-medium text-gray-300">Re-organization Safeguard</p>
            </li>
            <li class="flex items-center">
             
              <p class="font-medium text-gray-300">Protection Against MEV/Private Transactions</p>
            </li>
          </ul>
        
        </div>
       
      </div>
      <div>
        <div class="p-8 bg-gray-900 rounded">
          <div class="mb-4 text-center">
            <p class="text-xl font-medium tracking-wide text-white">Auto Detection with BRO Bot</p>
            <div class="flex items-center justify-center">
              <p class="mr-2 text-xl font-semibold text-white lg:text-xl">
              Fees: 0.75%
              </p>
          
            </div>
          </div>
          <ul class="mb-8 space-y-2">
          <p class="font-medium text-gray-300">
          Features:
</p>
            <li class="flex items-center">
              
              <p class="font-medium text-gray-300">Advanced Anti-Scam Layers</p>
            </li>
            <li class="flex items-center">
            
              <p class="font-medium text-gray-300">Maximum of 5 Wallets for Optimal Control</p>
            </li>
            <li class="flex items-center">
           
              <p class="font-medium text-gray-300">Re-organization Shielding</p>
            </li>
            <li class="flex items-center">
            
              <p class="font-medium text-gray-300">Defense Against MEV/Private Transactions</p>
            </li>
          </ul>
         
        </div>
      
      </div>
    </div>
  </div>
</div>
</section>
</>
  )
}

export default Hero7