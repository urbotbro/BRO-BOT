import React from 'react';
import Image from 'next/image';
import Loader from '../public/Loader.gif'
const PreLoader = () => {
  return (
    <div className="preloader">
     <Image src={Loader} alt='loader' />
    </div>
  );
};

export default PreLoader;
