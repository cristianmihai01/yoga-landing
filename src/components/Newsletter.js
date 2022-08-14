import React from 'react';

const Newsletter = () => {
  return (
    <section className='section-sm lg:section-lg bg-green min-h-[520px]'>
      <div className='container mx-auto'>
        <div className='border-[8px] border-green-300 rounded-lg text-center pt-[70px] pb-12'>
          <h4 className='text-[26px] text-white font-bold mb-[14px]'>
            Subscribe Our Newsletter
          </h4>
          <p className='text-green-200'>
            Subscribe our newsletter for further updates about us
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
