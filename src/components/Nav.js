import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 36 ? setNav(true) : setNav(false);
    });
  }, [nav]);
  return (
    <nav
      className={`${
        nav ? 'top-0 h-[80px]' : 'top-9'
      } fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-lg px-8 z-10 transition-all duration-500 flex items-center`}
    >
      Nav
    </nav>
  );
};

export default Nav;
