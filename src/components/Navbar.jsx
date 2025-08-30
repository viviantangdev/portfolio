import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { navigation } from '../data/navigation';
import AnimationScale from './AnimationScale';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav aria-label='Main navigation' className='navbar'>
      {/*Desktop menu*/}
      <div className='hidden sm:flex justify-between items-center'>
        {/*Logo*/}
        <span className='gradient-text pointer-events-none'>VivianTang</span>
        <div className='flex items-center gap-6'>
          <ol className='hidden gap-1 sm:flex'>
            {navigation.map((nav) => (
              <li key={nav.key}>
                <a href={nav.link} className='gradient-text-hover px-4 py-1'>
                  {nav.title}
                </a>
              </li>
            ))}
          </ol>
          <ThemeToggle />
        </div>
      </div>
      {/*Mobile menu*/}
      <div className='flex flex-col items-end'>
        <div className='flex justify-between w-full sm:hidden'>
          {/*Logo*/}
          <span className='gradient-text pointer-events-none'>VT</span>
          <button
            type='button'
            aria-label='toggle menu'
            onClick={() => setIsOpen(!isOpen)}
            className='sm:hidden'
          >
            {isOpen ? (
              <IoClose size={25} className='drop-shadow-md' />
            ) : (
              <IoMenu size={25} className='drop-shadow-md' />
            )}
          </button>
        </div>
        {/*Drawer */}
        {isOpen && (
          <ol className='mt-4 space-y-2 '>
            {navigation.map((nav) => (
              <AnimationScale>
                <li key={nav.key} className='text-center gradient-btn'>
                  <a
                    href={nav.link}
                    onClick={() => setIsOpen(!isOpen)}
                    className=''
                  >
                    {nav.title}
                  </a>
                </li>
              </AnimationScale>
            ))}
            <AnimationScale>
              <ThemeToggle />
            </AnimationScale>
          </ol>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
