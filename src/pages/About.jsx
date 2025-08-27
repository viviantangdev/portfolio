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
      {/*     TODO Add tech stack*/}

      <h3>My journey</h3>

      <ol class='relative text-start border-s border-gray-200'>
        <li class='mb-10 ms-6'>
          <span class='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
            <svg
              class='w-2.5 h-2.5 text-blue-800 dark:text-blue-300'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
            </svg>
          </span>
          <h3 class='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
            Fontend developer
            <span class='bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3'>
              Latest
            </span>
          </h3>
          <time class='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            Company name, year
          </time>
          <p class='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quos quibusdam quidem hic voluptatibus, exercitationem neque vel
            explicabo accusantium maxime, qui ipsa voluptate sunt a? Sint ipsum
            quis explicabo! Libero!
          </p>
        </li>
        <li class='mb-10 ms-6'>
          <span class='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
            <svg
              class='w-2.5 h-2.5 text-blue-800 dark:text-blue-300'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
            </svg>
          </span>
          <h3 class='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
            Frontend developer
          </h3>
          <time class='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            School name, year
          </time>
          <p class='text-base font-normal text-gray-500 dark:text-gray-400'>
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
