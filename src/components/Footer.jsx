import { FaEnvelope, FaGithub, FaLinkedin , FaHeart} from 'react-icons/fa6';
import { pages } from '../data/pages';

export const Footer = () => {
  return (
    <footer className='absolute w-full px-6 py-10 mt-20 border-t text-sm text-center border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--card-text)] shadow-inner backdrop-blur-md'>
      <div className='max-w-6xl mx-auto flex flex-col items-center space-y-4'>
        {/* Social Icons */}
        <div className='flex gap-4'>
          <a
            href='https://github.com/viviantangdev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='text-xl hover:text-[var(--tw-accent)] transition' />
          </a>
          <a
            href='https://linkedin.com/in/viviantangdev
'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin className='text-xl hover:text-[var(--tw-accent)] transition' />
          </a>
          <a
            href='mailto:viviantang.dev@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelope className='text-xl hover:text-[var(--tw-accent)] transition' />
          </a>
        </div>

        {/* Navigation Links */}
        <div className='flex gap-4 '>
          {pages.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className='hover:text-[var(--tw-accent)] transition'
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <div className='flex gap-2'>
          <span className='text-xs opacity-[50%]'>
            &copy; {new Date().getFullYear()} Vivian Tang · Built with React &
            Tailwind
          </span>
          <FaHeart className='opacity-[50%]'/>
        </div>
      </div>
    </footer>
  );
};
