import React from 'react';
import { FaTelegram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="border-b-4 border-indigo-100">
      <footer className=" p-4">
        <div className="flex justify-center items-center">
          <a
            href="https://t.me/bro_bot_token"
          
           
            className="text-blue-500 mx-4"
          >
            <FaTelegram size={30} />
          </a>
          <a
            href="https://x.com/ur_bot_bro?s=21"
         
            className="text-blue-500 mx-4"
          >
            <FaTwitter size={30} />
          </a>
        </div>
        <p className='text-center pt-2 text-green-100'>Copyright © 2023 BRO BOT. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
