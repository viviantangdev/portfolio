import React from 'react';

export const SocialButton = ({ href, label, icon }) => {
  return (
    <a
      href={href}
      aria-label={label}
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex items-center gap-2 px-4 py-2 text-white transition-colors duration-200 bg-black rounded hover:bg-gray-800'
    >
      {icon}
    </a>
  );
};
