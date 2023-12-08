import { useEffect, useRef, useState } from 'react';

const Hero6 = () => {
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
    <section className={`transition-opacity duration-1000 ease-in-out transform translate-y-1 opacity-0 ${
      visible ? 'opacity-100 translate-y-0' : 'dark:text-gray-100'
    }`}  ref={elementRef}>
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-3xl font-medium tracki text-white text-center ">BRO Rewards for Bot Users</p>
		<h2 className="mb-12 text-xl font-bold leadi text-center text-white sm:text-xl">Introducing an enticing incentive in our ecosystem: BRO Boost! Fancy being rewarded for transactions you were already going to make? Here&apos;s your chance! Every trade you execute through our bot adds to your volume, and a portion of this gets credited back to you in $BRO tokens (which also qualifies for the revenue share). Over time, this simple act can accumulate into a substantial reward. This seamless process naturally turns our bot users into token holders, and subsequently, potential investors.</h2>
		
        <h2 className="mb-12 text-xl font-bold leadi text-center text-white sm:text-xl">To keep operations smooth, there&apos;s a nominal trading fee when using our bot:</h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-100">
		
				<span className="py-2 outline-none cursor-pointer text-white text-center focus:underline">Manual trading: 0.5%</span>
			
			
		
				<span className="py-2 outline-none cursor-pointer text-white text-center focus:underline">Auto-trade feature: 1%</span>
				
			
			<details>
				<summary className="py-2 outline-none text-white text-center cursor-pointer focus:underline">But here’s the twist! We&apos;re all about giving back. So, we’re introducing a cashback system, the BRO Boost, calculated as:</summary>
				<div className="px-4 text-white  pb-4 space-y-2">
					<p>**BRO Boost** = Fees Paid ($) * Multiplier Z</p>
                        <p>Where Multiplier Z ranges from 0.05 to 1, adjustable based on market conditions or during special promotional periods (think of it as our version of a &quot;golden hour&quot;!).
                    </p>
					<p>
                        For instance, let&apos;s take Alex, our enthusiastic trader. He engages in both sniping and manual buys, and in a week, accumulates trades worth $10,000 with an average fee of 0.75%. 
                        </p>
                        
                        <p>Given that $BRO is priced at $10 and the current Multiplier Z is 0.2:
                    </p>

                       <p>Fees Alex pays: $75 in ETH</p>
                         <p> Cashback via BRO Boost: $75 * 0.2 = $15 = 1.5 $BRO tokens.</p>
                         <p> That&apos;s right, you&apos;re essentially earning back for actions you&apos;d do anyway! Whenever you&apos;re ready, simply claim your accumulated tokens via our dApp. The more you trade, the more you earn. It’s that simple with BRO Boost!
                        </p>
				</div>
			</details>
		</div>
	</div>
</section>
  </>
  )
}

export default Hero6