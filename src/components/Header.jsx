import React from 'react';
import { MdOutlineMenu, MdClose } from 'react-icons/md';
import Navbar from './Navbar';
import { useState } from 'react';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className='header'>
      <h1 className='text-custom-text text-2xl'>
        <a href="#home"><span className='text-custom-accent font-bold'>Vivian</span>Tang</a>
      </h1>
      <div className=''>
        <button
          className='text-2xl md:hidden'
          onClick={() => setNavOpen((prev) => !prev)}
        >
          {navOpen ? <MdClose /> : <MdOutlineMenu />}
        </button>
        <Navbar navOpen={navOpen} />
      </div>
    </header>
  );
};

export default Header;
