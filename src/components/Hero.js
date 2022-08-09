import React from 'react';
import Nav from './Nav';
// import Image
import Image from '../assets/img/hero/guy.png';
import CircleImage from '../assets/img/hero/bg.png';

import { Parallax } from 'react-parallax';

const Hero = () => {
  return (
    <section className='min-h-[618px] lg:min-h-[815px] bg-red-200 pt-[38px] bg-hero bg-no-repeat bg-right-top'>
      <div className='container mx-auto'>
        <Nav />
        <div className='flex flex-col items-center lg:flex-row lg:items-start pt-32 lg:pt-48'>
          <div className='flex-1 lg:mt-6'>
            <h1
              className='text-4xl font-extrabold mb-3 lg:text-[70px] lg:leading-tight'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              Yoga to <br /> Release Stress
            </h1>
            <p data-aos='fade-down' data-aos-delay='600'>
              Yoga is a way of life, rather than a chore. Counteract the
              stresses of modern life by becoming more mindful and
              compassionate.
            </p>
            <div data-aos='fade-down' data-aos-delay='700'>
              buttons
            </div>
          </div>
          <div
            className='flex-1 flex justify-end'
            data-aos='fade-left'
            data-aos-delay='800'
          >
            <div className='w-[234px] h-[344px] lg:w-[504px] lg:h-[744px]'>
              <Parallax
                className='w-full h-full p-24 lg:p-16'
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
