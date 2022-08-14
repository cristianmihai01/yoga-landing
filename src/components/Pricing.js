import React from 'react';
import { useState } from 'react';

// import data
import { pricing } from '../data';

const Pricing = () => {
  const [active, setActive] = useState(false);
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
                className={`${
                  index === currentIndex ? 'bg-orange' : 'bg-white'
                } w-full max-w-[368px]`}
                key={currentIndex}
              >
                {/* card top */}
                <div className='text-center mb-[34px] mt-[70px]'>
                  <h5 className='text-[24px] font-medium mb-[10px]'>{title}</h5>
                  <div className='text-[34px] font-semibold text-heading'>
                    {price}
                  </div>
                </div>
                {/* line */}
                <div className='h-0.5 bg-stroke-3 w-full'></div>
                <div className='px-[30px] pt-[18px] pb-[30px]'>
                  <p className='text-center mb-6 text-sm'>
                    Discover your favorite class!
                  </p>
                  {/* card list */}
                  <ul className='flex flex-col gap-5 mb-24'>
                    {list.map((item, index) => {
                      return (
                        <li
                          className='border border-stroke-3 p-4 rounded-md flex items-center gap-4'
                          key={index}
                        >
                          <div className='flex justify-center items-center bg-green-100 w-7 h-7 text-2xl text-green-300 rounded-full'>
                            {item.icon}
                          </div>
                          {item.name}
                        </li>
                      );
                    })}
                  </ul>
                  {/* btn */}
                  <button className='w-full h-[50px] border border-orange rounded flex items-center justify-center relative text-orange font-medium hover:bg-orange hover:text-white transition'>
                    {buttonText}
                    <div className='w-[50px] h-[50px] flex justify-center items-center bg-orange absolute right-0 text-white'>
                      {buttonIcon}
                    </div>
                  </button>
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
