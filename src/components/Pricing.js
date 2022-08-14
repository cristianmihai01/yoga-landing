import React from 'react';
import { useState } from 'react';

// import data
import { pricing } from '../data';

const Pricing = () => {
  const [index, setIndex] = useState(0);
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
          {pricing.map((card, currentIndex) => {
            const { title, price, list, buttonIcon, buttonText } = card;
            return (
              <div
                onClick={() => setIndex(currentIndex)}
                className='w-full max-w-[368px] min-h-[668px] h-full bg-white cursor-pointer relative'
                key={currentIndex}
              >
                {/* card top */}
                <div
                  className={`${
                    index === currentIndex
                      ? 'bg-orange text-white'
                      : 'bg-white text-heading'
                  } text-center pb-[34px] pt-[70px] border-b border-stroke-3 transition`}
                >
                  <div className='text-[24px] font-medium mb-[10px]'>
                    {title}
                  </div>
                  <div className='text-[34px] font-semibold'>{price}</div>
                </div>

                <div className='px-[30px] pt-[18px] pb-[30px]'>
                  <p className='text-center mb-6 text-sm'>
                    Discover your favorite class!
                  </p>
                  {/* card list */}
                  <ul className='flex flex-col gap-3 mb-10'>
                    {list.map((item, index) => {
                      const { icon, name } = item;
                      return (
                        <li
                          className='border border-stroke-3 p-4 rounded-md flex items-center gap-4'
                          key={index}
                        >
                          <div className='flex justify-center items-center bg-green-100 w-7 h-7 text-2xl text-green-300 rounded-full'>
                            {icon}
                          </div>
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                  {/* btn */}
                  <div className='absolute bottom-[30px] left-0 right-0 w-full px-[30px]'>
                    <button className='w-full h-[50px] border border-orange rounded flex items-center justify-center text-orange font-medium hover:bg-orange hover:text-white transition relative'>
                      {buttonText}
                      <div className='w-[50px] h-[50px] flex justify-center items-center bg-orange absolute right-0 text-white'>
                        {buttonIcon}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
