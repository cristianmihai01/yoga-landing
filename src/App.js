import React from 'react';

// import components
import Facts from './components/Facts';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  Aos.init({
    duration: 1500,
  });
  return (
    <div>
      <div className='h-[2000px]'></div>
      <Facts />
    </div>
  );
};

export default App;
