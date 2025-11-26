import profileImg from '../assets/profile.jpeg';
import SectionTitle from '../components/SectionTitle';
import { techStacks } from '../data/techStacks';

const About = () => {
  return (
    <section
      id='about'
      data-aos='fade-in'
      data-aos-duration='3000'
      className='w-[90%] md:w-[80%] 2xl:w-[50%] max-w-7xl mx-auto'
    >
      <SectionTitle title={'About me'} />

      <div>
        <img
          src={profileImg}
          alt='Profile picture'
          className='w-50 h-50 rounded-full object-cover shadow-md m-3'
        />
      </div>

      <div className='space-y-3'>
        <p>
          I´m a frontend developer who enjoys creating responsive, accessible
          and interactive applications that looks appealing and enjoyable for
          people to use.
        </p>
        <p>
          The unique combination of creativity, logic, technology and never
          running out of new things to discover, drives my excitement and
          passion for web development.
        </p>
        <p>
          I´m curious and excited to learn new things - wheater its mastering
          frameworks, programming languages or finding cleaner ways to code.
        </p>
      </div>

      <article>
        <h3>Technical expertise</h3>
        <ol className='flex justify-center py-6 gap-x-6 gap-y-6 flex-wrap'>
          {techStacks.map((tech, index) => (
            <li key={index}>
              <div className='flex flex-col justify-center items-center gap-2'>
                {tech.icon}
                <p className='secondary-paragraph'>{tech.name}</p>
              </div>
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
};

export default About;
