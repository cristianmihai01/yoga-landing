import React from 'react';

const Cards = () => {
  return (
    <section className='bg-cardsBg min-h-[260px]'>
      <div className='container mx-auto flex flex-col lg:flex-row gap-x-[32px]'>
        <div className='flex-1 flex gap-x-[15px] lg:gap-x-[32px] -mt-[38px] lg:-mt-[77px] z-10'>
          <div className='bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md h-[262px]'>
            <div className='flex items-center'>
              <h4 className='h4 mr-8'>Make Your Own Plan For Yoga.</h4>
              <h2 className='h2 text-stroke-2'>1</h2>
            </div>
          </div>
          <div className='bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md h-[262px]'>
            card 2
          </div>
        </div>
        <div className='bg-white w-full max-w-[542px] p-[14px] lg:p-[26px] -mt-[38px] lg:-mt-[77px] z-10 shadow-2xl rounded-md h-[262px]'>
          2
        </div>
      </div>
    </section>
  );
};

export default Cards;
