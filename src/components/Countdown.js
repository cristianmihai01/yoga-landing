import React from 'react';

// import image
import Image from '../assets/img/john-cena.png';

// import react Countup
import CountUp from 'react-countup';

const Countdown = () => {
  return (
    <section className='section-sm lg:section-lg'>
      <div className='container mx-auto flex flex-col lg:flex-row lg:gap-x-[30px]'>
        <div className='flex-1 flex flex-wrap gap-x-[70px] gap-y-[35px]'>
          <div className='lg:max-w-[241px]'>
            <div className='text-3xl font-bold lg:text-[50px] mb-2'>
              <CountUp start={1} end={15} duration={4} useEasing={true} />+
            </div>
            <div className='text-xl font-bold mb-1'>Years of Experience</div>
            <p>
              We are 05 years of experienced in this yoga field. Giving the best
              instructions.
            </p>
          </div>
          <div className='lg:max-w-[241px]'>
            <div className='text-3xl font-bold lg:text-[50px] mb-2'>
              <CountUp start={1} end={5} duration={5} useEasing={true} />
              K+
            </div>
            <div className='text-xl font-bold mb-1'>Happy Clients</div>
            <p>
              We have over five thousand clients all over the world. They are
              very satisfied.
            </p>
          </div>
          <div className='lg:max-w-[241px]'>
            <div className='text-3xl font-bold lg:text-[50px] mb-2'>
              <CountUp start={1} end={15} duration={3} useEasing={true} />+
            </div>
            <div className='text-xl font-bold mb-1'>Experienced Trainers</div>
            <p>
              We have over fifteen dedicated and experienced trainer for yoga
              and meditation.
            </p>
          </div>
          <div className='lg:max-w-[241px]'>
            <div className='text-3xl font-bold lg:text-[50px] mb-2'>
              <CountUp start={1} end={24} duration={3} useEasing={true} />+
            </div>
            <div className='text-xl font-bold mb-1'>Monthly Classes</div>
            <p>
              Yoga is a physical, mental and spritual practice discipline. We
              provide 24+ classes monthly.
            </p>
          </div>
        </div>
        <div className='flex-1 -order-1 lg:order-none'>
          <div className='flex flex-col justify-center h-full lg:pl-[100px]'>
            <h2 className='h2'>
              Relax And Enjoy a Personalized Day Yoga With Us.
            </h2>
            <div>
              <img src={Image} alt='' />
            </div>
            <div>
              John Cena <span>/Founder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
