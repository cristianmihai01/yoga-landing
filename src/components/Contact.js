import React from 'react';

const Contact = () => {
  return (
    <section className='section-sm lg:pt-[250px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]'>
          <div
            className='flex-1 flex flex-col justify-center pl-8'
            data-aos='fade-down'
            data-aos-delay='300'
            data-aos-offset='500'
          >
            <h2 className='h2 mb-3 lg:mb-7'>
              Get in Touch With Us for Yoga Course.
            </h2>
            <p className='mb-7 lg:mb-0'>
              Get in touch with us for any kind of help. We are here to give you
              the best and also here to help you to find your yoga course.
            </p>
          </div>
          <div
            className='flex-1 bg-white shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg:-mt-20'
            data-aos='fade-up'
            data-aos-delay='300'
            data-aos-offset='500'
          >
            <input
              className='form-control'
              placeholder='First name'
              type='text'
            />
            <input
              className='form-control'
              placeholder='Last name'
              type='text'
            />
            <input
              className='form-control'
              placeholder='Email address'
              type='email'
            />
            <textarea
              className='form-control py-5 h-[165px] resize-none'
              placeholder='Message'
            ></textarea>
            <button className='btn btn-lg btn-orange self-start'>
              Send message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
