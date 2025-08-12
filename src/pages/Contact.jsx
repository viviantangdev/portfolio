import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { LinkItem } from '../components/LinkItem';

const Contact = () => {
  return (
    <>
      <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-gradient-x text-shadow text-shadow transition-all duration-700 transform'>
        Contact
      </h2>
      <div className='flex justify-center my-5 gap-2'>
        <LinkItem
          icon={<FaEnvelope />}
          label='Email'
          href='mailto:viviantang.dev@gmail.com'
        />
        <LinkItem
          icon={<FaGithub />}
          label='Github'
          href='https://github.com/viviantangdev'
        />
        <LinkItem
          icon={<FaLinkedin />}
          label='Linkedin'
          href='https://linkedin.com/in/viviantangdev'
        />
      </div>
    </>
  );
};
export default Contact;
