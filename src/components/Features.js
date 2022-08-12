import React, { useState } from 'react';

// import modal video
import ModalVideo from 'react-modal-video';
import '../video.scss';

// import icons
import { BsPlayCircleFill } from 'react-icons/bs';

const Features = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className='bg-section min-h-[428px] pt-8 pb-[150px] mt-[120px] lg:mt-[130px]'>
      <div className='container mx-auto'>
        <div
          className='bg-video bg-cover bg-center bg-no-repeat h-[310px] lg:h-[622px] w-full flex justify-center items-center rounded-md -mt-[150px] mb-20'
          data-aos='fade-up'
          data-aos-offset='300'
          data-aos-duration='2000'
        >
          {/* play btn */}
          <div
            onClick={() => setOpen(!isOpen)}
            className='text-6xl lg:text-[120px] text-orange cursor-pointer hover:scale-110 transition'
          >
            <BsPlayCircleFill />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row lg:gap-x-8'>
          <div className='flex-1'>
            <div className='w-9 h-[2px] bg-orange mb-2 lg:w-[70px] rounded-full'></div>
            <h2 className='h2 mb-3 lg:mb-0'>
              The Better Way to <br /> Start Yoga
            </h2>
          </div>
          <div className='flex-1'>
            <p className='max-w-[360px] mb-[18px] lg:mb-[38px]'>
              Practice anywhere, anytime. Explore a new way to exercise and
              learn more about yourself. We are providing the best.
            </p>
            <button className='btn btn-sm bg-orange text-white'>
              Get started
            </button>
          </div>
        </div>
      </div>
      {/* video */}
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='klmBssEYkdU'
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default Features;
