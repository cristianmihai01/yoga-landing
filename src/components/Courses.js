import React from 'react';

// import images
import CourseImg1 from '../assets/img/courses/course-1.png';
import CourseImg2 from '../assets/img/courses/course-2.png';
import CourseImg3 from '../assets/img/courses/course-3.png';

// import icons
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const Courses = () => {
  return (
    <section className='section-sm lg:section-lg'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='text-center mb-16 lg:mb-32'>
          <h2
            className='h2 mb-3 lg:mb-[18px]'
            data-aos='fade-down'
            data-aos-delay='200'
          >
            Popular Courses
          </h2>
          <p
            className='max-w-[480px] mx-auto'
            data-aos='fade-down'
            data-aos-delay='300'
          >
            Practice anywhere, anytime. Explore a new way to exercise and learn
            more about yourself. We are providing the best.
          </p>
        </div>
        {/* course list */}
        <div className='flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24'>
          {/* item */}
          <div
            className='w-full max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] bg-white hover:shadow-primary flex flex-col rounded-[14px] mx-auto transition'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            <div className='-mt-[38px] lg:-mt-12 mb-4 lg:mb-6'>
              <img src={CourseImg1} alt='' />
            </div>
            <div>
              <h4 className='text-lg lg:text-xl font-semibold mb-2 lg:mb-4'>
                Resortive Yoga Training & Immersion
              </h4>
              <p>
                Here is some tips for new job seekars who want to get a dream
                job and want to shine in his career.
              </p>
            </div>
            <div className='flex items-center justify-between mt-8 mb-2 lg:mb-0'>
              {/* stars */}
              <div className='flex gap-x-2 text-orange'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
              <a className='font-medium' href='#'>
                Get started
              </a>
            </div>
          </div>
          {/* item */}
          <div
            className='w-full max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] bg-white hover:shadow-primary flex flex-col rounded-[14px] mx-auto transition'
            data-aos='fade-up'
            data-aos-delay='800'
          >
            <div className='-mt-[38px] lg:-mt-12 mb-4 lg:mb-6'>
              <img src={CourseImg2} alt='' />
            </div>
            <div>
              <h4 className='text-lg lg:text-xl font-semibold mb-2 lg:mb-4'>
                Resortive Yoga Training & Immersion
              </h4>
              <p>
                Here is some tips for new job seekars who want to get a dream
                job and want to shine in his career.
              </p>
            </div>
            <div className='flex items-center justify-between mt-8 mb-2 lg:mb-0'>
              {/* stars */}
              <div className='flex gap-x-2 text-orange'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
              <a className='font-medium' href='#'>
                Get started
              </a>
            </div>
          </div>
          {/* item */}
          <div
            className='w-full max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] bg-white hover:shadow-primary flex flex-col rounded-[14px] mx-auto transition'
            data-aos='fade-up'
            data-aos-delay='1000'
          >
            <div className='-mt-[38px] lg:-mt-12 mb-4 lg:mb-6'>
              <img src={CourseImg3} alt='' />
            </div>
            <div>
              <h4 className='text-lg lg:text-xl font-semibold mb-2 lg:mb-4'>
                Resortive Yoga Training & Immersion
              </h4>
              <p>
                Here is some tips for new job seekars who want to get a dream
                job and want to shine in his career.
              </p>
            </div>
            <div className='flex items-center justify-between mt-8 mb-2 lg:mb-0'>
              {/* stars */}
              <div className='flex gap-x-2 text-orange'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
              <a className='font-medium' href='#'>
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
