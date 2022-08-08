import React from 'react';

// import react countup
import CountUp from 'react-countup';
// import image
import Image from '../assets/img/john-cena.png';

const Facts = () => {
  return (
    <section className='section-sm lg:section-lg'>
      <div className='container mx-auto flex flex-col lg:flex-row lg:gap-x-[30px]'>
        <div
          className='flex-1 flex flex-wrap gap-x-[5%] gap-y-[35px]'
          data-aos='fade-up'
        >
          <div className='w-[45%]'>
            <div className='text-3xl font-bold lg:text-[50px] mb-2 lg:mb-4'>
              0
              <CountUp start={1} end={5} duration={2} enableScrollSpy />+
            </div>
            <div className='text-xl font-bold mb-3'>Years of Experience</div>
            <p className='max-w-[240px]'>
              We are 05 years of experienced in this yoga field. Giving the best
              instructions.
            </p>
          </div>
          <div className='w-[45%]'>
            <div className='text-3xl font-bold lg:text-[50px] mb-2 lg:mb-4'>
              <CountUp start={1} end={5} duration={2} enableScrollSpy />
              K+
            </div>
            <div className='text-xl font-bold mb-3'>Happy Clients</div>
            <p className='max-w-[240px]'>
              We have over five thousand clients all over the world. They are
              very satisfied.
            </p>
          </div>
          <div className='w-[45%]'>
            <div className='text-3xl font-bold lg:text-[50px] mb-2 lg:mb-4'>
              <CountUp start={1} end={15} duration={2} enableScrollSpy={true} />
              +
            </div>
            <div className='text-xl font-bold mb-3'>Experienced Trainers</div>
            <p className='max-w-[240px]'>
              We have over fifteen dedicated and experienced trainer for yoga
              and meditation.
            </p>
          </div>
          <div className='w-[45%]'>
            <div className='text-3xl font-bold lg:text-[50px] mb-2 lg:mb-4'>
              <CountUp start={1} end={24} duration={2} enableScrollSpy={true} />
              +
            </div>
            <div className='text-xl font-bold mb-3'>Monthly Classes</div>
            <p className='max-w-[240px]'>
              Yoga is a physical, mental and spritual practice discipline. We
              provide 24+ classes monthly.
            </p>
          </div>
        </div>
        <div className='flex-1 -order-1 lg:order-none'>
          <div className='flex flex-col justify-center h-full lg:pl-[100px]'>
            <h2
              className='h2 mb-12 max-w-[295px] md:max-w-none'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              Relax And Enjoy a Personalized Day Yoga With Us.
            </h2>
            <div className='mb-2' data-aos='fade-down' data-aos-delay='600'>
              <img src={Image} alt='' />
            </div>
            <div
              className='text-lg font-bold mb-6'
              data-aos='fade-down'
              data-aos-delay='700'
            >
              John Cena <span className='text-base font-normal'>/Founder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
