import AnimationFadeIn from '../components/AnimationFadeIn';
import AnimationScale from '../components/AnimationScale';
import Navbar from '../components/Navbar';

// TODO Add an animated scroll down button
const Home = () => {
  return (
    <div id="home">
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
