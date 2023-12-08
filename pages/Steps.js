import { useEffect, useRef, useState } from 'react';

const Steps = () => {
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
    <section  ref={elementRef}
    className={`transition-opacity duration-1000 ease-in-out transform translate-y-1 opacity-0 ${
      visible ? 'opacity-100 translate-y-0' : ''
    }`}>
    <section className="py-10 text-white sm:py-16 lg:py-44">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight  sm:text-4xl ">Steps to Begin Earning $BRO:</h2>
           
        </div>

        <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700"> 1 </span>
                    </div>
                  
                    <p className="mt-4 text-base text-gray-100">Engage with BRO Bot as you typically would</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700"> 2 </span>
                    </div>
                 
                    <p className="mt-4 text-base text-gray-100">Monitor your accumulating rewards via the main menu under the &quot;BRO Bounty&quot; section.</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700"> 3 </span>
                    </div>
                 
                    <p className="mt-4 text-base text-gray-100">Claim your $BRO rewards when re ady, starting from a minimum of 5 BRO tokens.</p>
                </div>
            </div>
        </div>
    </div>
</section>
</section>
  )
}

export default Steps
