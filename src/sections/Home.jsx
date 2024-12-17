import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const handleClick = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Enables smooth scrolling
        block: 'start', // Aligns to the top of the element
      });
    }
  };

  return (
    <section id='home' className='animate-slideInFromRight space-y-6'>
      <p className='text-2xl'>👋🏼 Hi, I´m Vivian!</p>

      <div className='flex justify-center items-center space-x-4'>
        <p className='italic font-thin text-2xl'>I´m a</p>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Frontend Developer',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Web Designer',
            1000,
        
          ]}
          wrapper='span'
          speed={50}
          style={{ fontSize: '2em', display: 'block' }}
          repeat={Infinity}
        />
      </div>
      <button
        type='button'
        className=''
        onClick={() => handleClick('projects')}
      >
        See my projects
      </button>
    </section>
  );
};

export default Home;
