import { useEffect, useRef, useState } from 'react';

const Hero4 = () => {
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
    <section className="py-12 text-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl xl:text-5xl font-pj">Ensuring Longevity with BRO Bot</h2>
          <p className="mt-4 text-base leading-7 text-gray-100 sm:mt-8 font-pj">Some might wonder: How does BRO Bot maintain its robustness and remain resilient against market volatility? How do we handle potential selling pressure? Fear not, we&apos;ve meticulously planned this out. We&apos;ve delved deep, considered diverse scenarios, and crafted strategies to ensure minimal inflation impacts and potentially even induce deflation. Here&apoos;s how:</p>
         
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 gap-y-12">
          <div className="sm:grid sm:grid-cols-3 sm:gap-x-12">
            <div className="md:p-8 lg:p-14  border-2 border-blue-400 dark:border-blue-300">
              <h3 className="mt-12 text-xl font-bold text-gray-100 font-pj">Treasury Reinvestment</h3>
              <p className="mt-5 text-base text-gray-100 font-pj">A 1% treasury tax facilitates buybacks. In every scenario we&apos;ve modeled, this strategy effectively counteracts a significant portion of inflation.</p>
             
              </div>

              

            <div className="md:p-8 lg:p-14 md:border-l  border-2 border-blue-400 dark:border-blue-300 ">
              <h3 className="mt-12 text-xl font-bold text-gray-100 font-pj">Adjustable Multiplier Mechanism</h3>
              <p className="mt-5 text-base text-gray-100 font-pj">We have the Multiplier Z in our toolkit. This allows us to modulate emission rates as per market dynamics, ensuring equilibrium.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l   border-2 border-blue-400 dark:border-blue-300">
              <h3 className="mt-12 text-xl font-bold text-gray-100 font-pj">Trade-to-Earn Cycle</h3>
              <p className="mt-5 text-base text-gray-100 font-pj">Encouraging users to trade more frequently amplifies bot volume, setting a positive, self-reinforcing loop in motion.</p>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-2 sm:gap-x-12  border-2 border-blue-400 dark:border-blue-300">
            <div className="md:p-8 lg:p-14">
              <h3 className="mt-12 text-xl font-bold text-gray-100 font-pj">$BRO Burn Initiatives</h3>
              <p className="mt-5 text-base text-gray-100 font-pj">We&apos;ll periodically introduce features that necessitate the burning of $BRO tokens, permanently removing them from circulation and increasing token scarcity.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l  border-2 border-blue-400 dark:border-blue-300">
              <h3 className="mt-12 text-xl font-bold text-gray-100 font-pj">Incentivizing Holding</h3>
              <p className="mt-5 text-base text-gray-100 font-pj">A significant revenue share for token holders ensures they&apos;re motivated to retain their tokens, promoting stability.</p>
            </div>
          </div>
          <div className="text-center">
         
          <p className="mt-4 text-base leading-7 text-gray-100 sm:mt-8 font-pj">Our commitment is to a harmonious cycle where any emissions are not detrimental to token holders. We&apos;ve run myriad scenarios and stress-tested our system. Our dynamic Multiplier Z aids us in swiftly adapting to evolving market landscapes, and our projections exude confidence in maintaining inflation/deflation within a range of -30% to +30%. Three key pillars influence this: Token price, bot volume, and trade volume. We&apos;ve crafted BRO Bot not just for the present but with a vision for a sustainable future.</p>
        </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default Hero4;