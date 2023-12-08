import Image from 'next/image';
import Link from 'next/link';


import { useState } from 'react';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import LOGO from '../public/Logo.PNG'
function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const handleDownload = () => {
    // You can change the file URL as needed.
    const fileUrl = '/BRO Bot  Whitepaper.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'BRO Bot  Whitepaper.pdf';
    link.click();
  };

 
 
  return (
    <div>
      <nav className="w-full   left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/" title="" class="flex"> 
              <Image src={LOGO} className='w-[8vh]' alt='logo' /> 
              <span className='text-3xl mx-2 text-white pt-2  '>BRO Bot</span>
               </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <BsFillCaretDownFill />
                  ) : (
                    <GiHamburgerMenu className='bg-white' />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
              <Link href="/" onClick={() => setNavbar(!navbar)}>
             Home
              </Link>
            </li>

          


                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <button  onClick={handleDownload}>
                White Paper
              </button>
                </li>


               
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="https://t.me/bro_bot_token" onClick={() => setNavbar(!navbar)}>
                    Telegram
                  </a>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="https://x.com/ur_bot_bro?s=21" onClick={() => setNavbar(!navbar)}>
                    Twitter
                  </a>
                </li>

                <li className="pb-2 text-xl  bg-blue-500 text-center  text-white font-bold py-1 px-4 rounded">
            <Link href="/Hero1" onClick={() => setNavbar(!navbar)}>
            Bro Bot Academy
            </Link>
          </li>



                <li className="pb-2 mx-3 text-xl bg-blue-500 text-center my-3 text-white font-bold  px-4 rounded ">
                <Link href="/Dashboard" onClick={() => setNavbar(!navbar)}>
                 Dashboard
                </Link>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;