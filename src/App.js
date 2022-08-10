import React from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Facts from './components/Facts';

const App = () => {
  Aos.init({
    duration: 1500,
  });
  return (
    <div>
      <Hero />
      <Cards />
      <Facts />
      <div className='h-[2000px]'></div>
    </div>
  );
};

export default App;
