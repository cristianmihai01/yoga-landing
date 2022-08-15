import React from 'react';

const Newsletter = () => {
  return (
    <section className='section-sm lg:section-lg bg-green min-h-[520px]'>
      <div className='container mx-auto'>
        <div className='border-[8px] border-green-300 rounded-lg text-center pt-[70px] pb-12'>
          <h4 className='text-[26px] text-white font-bold mb-[14px]'>
            Subscribe Our Newsletter
          </h4>
          <p className='text-green-200 mb-12'>
            Subscribe our newsletter for further updates about us
          </p>
          <form className='max-w-[752px] mx-auto relative flex flex-col lg:flex-row gap-y-6 p-4 gap-x-4'>
            <input
              type='text'
              className='form-control lg:flex-1 border border-green-300 bg-transparent rounded pl-6 outline-none placeholder:text-green-200 text-white'
              placeholder='Enter your email address'
            />
            <button className='btn btn-lg btn-orange text-white'>
              Get started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
