import React from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import Cards from './components/Cards';
import Facts from './components/Facts';
import Start from './components/Start';

const App = () => {
  Aos.init({
    duration: 1500,
  });
  return (
    <>
      <Hero />
      <Cards />
      <Facts />
      <Start />
      <div className='h-[2000px]'></div>
    </>
  );
};

export default App;
