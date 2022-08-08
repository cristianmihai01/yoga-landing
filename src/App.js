import React from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import Facts from './components/Facts';

const App = () => {
  Aos.init({
    duration: 1500,
  });
  return (
    <div>
      <Hero />
      <Facts />
      <div className='h-[2000px]'></div>
    </div>
  );
};

export default App;
