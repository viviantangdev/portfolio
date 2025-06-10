import { FaCode, FaEnvelope } from 'react-icons/fa6';
import { LinkItem } from '../components/LinkItem';
import {
  DartIcon,
  FlutterIcon,
  JavaScriptIcon,
  ReactIcon,
} from '../components/SvgIcon';
import { Tag } from '../components/Tag';
// import { WorkStatusButton } from '../components/WorkStatusButton';

const Home = () => {
  return (
    <section id='home' className='flex flex-col justify-center h-screen mx-5 space-y-5 text-center lg:items-start lg:text-left lg:mx-auto lg:max-w-4xl'>
      {/* <WorkStatusButton /> */}
      <h1 className='text-shadow animate-fade-up opacity-0 [animation-delay:0.1s]'>
        Vivian Tang
      </h1>
      <h2 className='text-3xl uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-gradient-x text-shadow animate-fade-up opacity-0 [animation-delay:0.1s]'>
        Frontend developer
      </h2>
      <p className='text-shadow animate-fade-up mt-10 opacity-0 [animation-delay:0.7s]'>
        I´m a frontend developer with experiences in creating websites, apps and
        UX/UI.
      </p>

      <div className='flex justify-center flex-wrap gap-2 mb-10'>
        <Tag content={<ReactIcon />} hoverContent={'React'} />
        <Tag content={<JavaScriptIcon />} hoverContent={'JavaScript'} />
        <Tag content={<FlutterIcon />} hoverContent={'Flutter'} />
        <Tag content={<DartIcon />} hoverContent={'Dart'} />
        <Tag content={'Read more about me'} className='text-sm '  href='#about'/>
      </div>
      <div className='flex justify-center gap-4'>
        <LinkItem href='/projects' label='Projects' icon={<FaCode className="transition-colors duration-300" />} />
      </div>
    </section>
  );
};

export default Home;
