import bgImage from '../assets/bg.jpg';
import AnimationFadeIn from '../components/AnimationFadeIn';
import AnimationScale from '../components/AnimationScale';
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
      <AnimationFadeIn>
        <Navbar />
      </AnimationFadeIn>
      <section className='h-svh justify-center'>
        <AnimationFadeIn>
          <h1 className='gradient-text p-4'>Vivian tang</h1>
        </AnimationFadeIn>
        <AnimationFadeIn>
          <span className='text-2xl font-extralight'>Frontend Developer</span>
        </AnimationFadeIn>
        <AnimationFadeIn>
          <p className='secondary-paragraph p-2 text-center'>
            Looking to expand my expertise in the tech realm
          </p>
        </AnimationFadeIn>

        {/*Mousescroll*/}
        <AnimationScale>
          <div className='mt-25'>
            <span className='mouse-btn'>
              <span className='mouse-scroll animate-scrolling'></span>
            </span>
          </div>
        </AnimationScale>
      </section>
    </div>
  );
};

export default Home;
