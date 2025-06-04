import React from 'react';

export const WorkStatusButton = () => {
  /* Fancy Open for Work Button */
  return (
    <div className='flex justify-center animate-fade-in opacity-0 [animation-delay:1.1s]'>
      <button className='flex items-center gap-5 px-3 py-2 font-light  duration-300 border shadow-md backdrop-blur-md border-green-400/10 bg-green-400/10 rounded-xl'>
        {/* Pulsing Dot */}
        <span className='relative w-3 h-3'>
          <span className='absolute inline-flex w-full h-full bg-green-500 rounded-full opacity-75 animate-ping'></span>
          <span className='absolute inline-flex w-3 h-3 bg-green-500 rounded-full'></span>
        </span>
        <span>Open for work</span>
      </button>
    </div>
  );
};
