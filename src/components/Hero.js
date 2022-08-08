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
        <div className='flex items-center pt-32'>
          <div className='flex-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            autem assumenda inventore omnis iste natus ullam? Quo molestiae
            earum nihil rem provident unde obcaecati incidunt itaque aut! Quod,
            explicabo reiciendis!
          </div>
          <div className='flex-1'>
            <div className='w-[504px] h-[744px]'>
              <Parallax
                className='w-full h-full p-8'
                bgImage={Image}
                bgImageAlt='guy'
                strength={200}
              ></Parallax>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
