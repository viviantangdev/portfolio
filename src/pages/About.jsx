import { FaBriefcase, FaGraduationCap } from 'react-icons/fa6';

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <h2>About me</h2>
      <p>
        I´m a frontend developer who enjoys creating responsive, accessible and
        interactive applications that looks appealing and enjoyable for people
        to use.
      </p>
      <p>
        I´m curious and excited to learn new things - wheater its mastering
        frameworks, programm languages or finding cleaner ways to code.
      </p>

      <h3>Technical expertise</h3>
      {/* TODO Add tech stack*/}

      <h3>My journey</h3>

      <ol className='relative text-start border-s border-gray-200'>
        <li className='mb-10 ms-6'>
          <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 '>
            <FaBriefcase />
          </span>
          <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
            Fontend developer
            <span className='bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm ms-3'>
              Latest
            </span>
          </h3>
          <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            Company name, year
          </time>
          <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quos quibusdam quidem hic voluptatibus, exercitationem neque vel
            explicabo accusantium maxime, qui ipsa voluptate sunt a? Sint ipsum
            quis explicabo! Libero!
          </p>
        </li>
        <li className='mb-10 ms-6'>
          <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 '>
            <FaGraduationCap />
          </span>
          <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
            Frontend developer
          </h3>
          <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            School name, year
          </time>
          <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            eius ut labore provident quas nisi ratione a nemo nam deleniti
            asperiores error, consequatur in sit quibusdam quae minus cum?
            Neque.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default About;
