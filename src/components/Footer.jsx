import { FaHeart } from 'react-icons/fa6';
import { navigation } from '../data/navigation';
import { socials } from '../data/socials';

export const Footer = () => {
  return (
    <div className='max-w-6xl mx-auto flex flex-col items-center space-y-4'>
      {/* Social Icons */}
      <div className='flex gap-4'>
        {socials.map((social, index) => (
          <a key={index} href={social.link} target='_blank' rel='noopener noreferrer'>
            {social.icon}
          </a>
        ))}
      </div>
      {/* Navigation Links */}
      <div className='flex gap-5'>
        {navigation.map((nav, index) => (
          <a key={index} href={nav.link}>{nav.title}</a>
        ))}
      </div>
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
