import React from 'react';

// import icons
import { BsCheck, BsChevronRight } from 'react-icons/bs';

const Pricing = () => {
  return (
    <section className='section-sm lg:section-lg bg-section'>
      <div className='container mx-auto'>
        <div className='text-center mb-7 lg:mb-[70px]'>
          <h2 className='h2 mb-3 lg:mb-[18px]'>Pick a Pricing Plan</h2>
          <p className='max-w-[398px] mx-auto'>
            Pick a pricing plan and get started your journey with us for build
            your body and mind
          </p>
        </div>
        {/* pricing cards */}
        <div className='flex flex-col mx-auto items-center gap-y-5 lg:flex-row lg:gap-x-[33px]'>
          {/* card 1 */}
          <div className='w-full max-w-[368px] bg-white'>
            {/* card top */}
            <div className='text-center mb-[34px] mt-[70px]'>
              <h5 className='text-[24px] font-medium mb-[10px]'>
                Single yoga class
              </h5>
              <div className='text-[34px] font-semibold text-heading'>$15.</div>
            </div>
            {/* line */}
            <div className='h-0.5 bg-stroke-3 w-full'></div>
            <div className='px-[30px] pt-[18px] pb-[30px]'>
              <p className='text-center mb-6 text-sm'>
                Discover your favorite class!
              </p>
              {/* card list */}
              <ul className='flex flex-col gap-5 mb-24'>
                <li className='border border-stroke-3 p-4 rounded-md flex items-center gap-4'>
                  <div className='flex justify-center items-center bg-green-100 w-7 h-7 rounded-full'>
                    <BsCheck className='text-2xl text-green-300' />
                  </div>
                  Pay as you go
                </li>
                <li className='border border-stroke-3 p-5 rounded-md flex items-center gap-4'>
                  <div className='flex justify-center items-center bg-green-100 w-7 h-7 rounded-full'>
                    <BsCheck className='text-2xl text-green-300' />
                  </div>
                  Perfect for non-residence
                </li>
                <li className='border border-stroke-3 p-5 rounded-md flex items-center gap-4'>
                  <div className='flex justify-center items-center bg-green-100 w-7 h-7 rounded-full'>
                    <BsCheck className='text-2xl text-green-300' />
                  </div>
                  Acces to all classes
                </li>
              </ul>
              {/* btn */}
              <button className='w-full h-[50px] border border-orange rounded flex items-center justify-center relative text-orange font-medium hover:bg-orange hover:text-white transition'>
                Book now
                <div className='w-[50px] h-[50px] flex justify-center items-center bg-orange absolute right-0 text-white'>
                  <BsChevronRight />
                </div>
              </button>
            </div>
          </div>
          {/* card 2 */}
          <div className='w-full max-w-[368px] bg-white'>card 2</div>
          {/* card 3 */}
          <div className='w-full max-w-[368px] bg-white'>card 3</div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
