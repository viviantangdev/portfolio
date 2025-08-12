import { FaCode } from 'react-icons/fa6';
import { LinkItem } from '../components/LinkItem';

const Home = () => {
  return (
    <>
      {/* <WorkStatusButton /> */}
      <h1 className='text-shadow animate-fade-up opacity-0 [animation-delay:0.1s]'>
        Vivian Tang
      </h1>
      <h2 className='pt-2 text-3xl uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-gradient-x text-shadow animate-fade-up opacity-0 [animation-delay:0.1s]'>
        Frontend developer
      </h2>
      <p className='py-4 text-shadow animate-fade-up opacity-0 [animation-delay:0.7s]'>
      💫 Turning ideas into interactive, responsive, and delightful experiences.
      </p>
   
      <div className='flex justify-center gap-4'>
        <LinkItem href='#projects' label='View my work' icon={<FaCode className="transition-colors duration-300" />} />
      </div>
    </>
  );
};

export default Home;
