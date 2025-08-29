import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';

export const socials = [
  {
    title: 'Github',
    link: 'https://github.com/viviantangdev',
    icon: <FaGithub className='text-xl hover:text-[var(--tw-accent)] transition' />,
  },
  {
    title: 'Email',
    link: 'mailto:viviantang.dev@gmail.com',
    icon: <FaEnvelope className='text-xl hover:text-[var(--tw-accent)] transition' />,
  },
  {
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/viviantangdev',
    icon: <FaLinkedin className='text-xl hover:text-[var(--tw-accent)] transition' />,
  },
];
