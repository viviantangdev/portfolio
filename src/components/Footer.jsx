import { FaEnvelope, FaGithub, FaHeart, FaLinkedin } from 'react-icons/fa6';

export const Footer = () => {
  return (
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
            href='https://linkedin.com/in/viviantangdev'
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
        {
          // TODO Add navlinks for quick navigation in footer
        }
        {/* Footer Text */}
        <div className='flex gap-2'>
          <span className='text-xs opacity-[50%]'>
            &copy; {new Date().getFullYear()} Vivian Tang · Built with React &
            Tailwind
          </span>
          <FaHeart className='opacity-[50%]' />
        </div>
      </div>
  );
};
