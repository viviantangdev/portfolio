import bgImage from '../assets/bg.jpg';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div id='home'>
      {/* Background */}
      <div
        className='absolute inset-0 bg-cover bg-center opacity-20 sm:bg-fixed dark:opacity-100'
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Background overlay */}
      <div className='absolute inset-0 dark:bg-black/80' />
      <Navbar />
      <section className='h-svh justify-center'>
        <div
          data-aos='fade-up'
          data-aos-duration='3000'
          className='flex flex-col items-center'
        >
          <h1 className='gradient-text p-4'>Vivian tang</h1>
          <span className='text-2xl font-extralight'>Frontend Developer</span>
          <p className='secondary-paragraph p-2 text-center'>
            Looking for new opportunities where I can ship beautiful,
            high-impact frontend work. Let’s build something awesome together!{' '}
          </p>
        </div>

        {/*Mousescroll*/}

        <div data-aos='zoom-in' data-aos-duration='3000' className='mt-25'>
          <span className='mouse-btn'>
            <span className='mouse-scroll animate-scrolling'></span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
