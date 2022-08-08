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
        nav ? 'fixed top-0 h-[80px] w-full max-w-[1170px]' : ''
      } bg-yellow-100 h-[90px] shadow-lg z-10 transition-all `}
    >
      Nav
    </nav>
  );
};

export default Nav;
