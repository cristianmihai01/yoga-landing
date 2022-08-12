import React from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import Cards from './components/Cards';
import Facts from './components/Facts';
import Features from './components/Features';
import Courses from './components/Courses';

const App = () => {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Cards />
      <Facts />
      <Features />
      <Courses />
      <div className='h-[2000px]'></div>
    </div>
  );
};

export default App;
