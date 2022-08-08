import React from 'react';
import Nav from './Nav';
// import Image
import Image from '../assets/img/hero/guy.png';

import { Parallax } from 'react-parallax';

const Hero = () => {
  return (
    <section className='min-h-[618px] lg:min-h-[815px] bg-red-200 pt-[38px]'>
      <div className='container mx-auto'>
        <Nav />
        <div className='w-[504px] h-[744px]'>
          <Parallax
            className='w-full h-full'
            bgImage={Image}
            bgImageAlt='guy'
            strength={200}
          ></Parallax>
        </div>
      </div>
    </section>
  );
};

export default Hero;
