import React, { useState, useEffect } from 'react';

// import components
import Nav from './Nav';
import NavMobile from './NavMobile';

// import logo
import Logo from '../assets/img/logo.png';

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    });
  }, [header]);

  return (
    <header
      className={`${
        header ? 'top-0 h-[80px]' : 'top-9'
      } fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-8 z-10 transition-all duration-500 flex items-center justify-between`}
    >
      <div className='flex items-center'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
        {/* nav */}
        <div className='hidden lg:flex '>
          <Nav />
        </div>
      </div>
      <div className='flex items-center'>
        <div>buttons</div>
        {/* nav mobile */}
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
