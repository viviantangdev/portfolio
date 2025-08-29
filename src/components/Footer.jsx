import { FaHeart } from 'react-icons/fa6';
import { socials } from '../data/socials';

export const Footer = () => {
  return (
    <div className='max-w-6xl mx-auto flex flex-col items-center space-y-4'>
      {/* Social Icons */}
      <div className='flex gap-4'>
        {socials.map((social) => (
          <a href={social.link} target='_blank' rel='noopener noreferrer'>
            {social.icon}
          </a>
        ))}
      </div>
      {/* Navigation Links */}
      {
        // TODO Add navlinks for quick navigation in footer
      }
      {/* Footer Text */}
      <div className='flex gap-2'>
        <span className='text-xs opacity-[50%]'>
          &copy; {new Date().getFullYear()} Vivian Tang
        </span>
        <FaHeart className='opacity-[50%]' />
      </div>
    </div>
  );
};
