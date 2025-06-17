import { Tag } from '../components/Tag';
import {
  aboutHighlights,
  myApproach,
  outsideOfCoding,
} from '../data/aboutBullets';
import { techCategory, techStack } from '../data/techStack';

const About = () => {
  function filterStack(category) {
    return techStack.filter((tech) => tech.category === category);
  }

  return (
    <>
      <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-gradient-x text-shadow text-shadow transition-all duration-700 transform'>
        About me
      </h2>
      <span className='text-2xl mt-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-gradient-x text-shadow text-shadow transition-all duration-700 transform'>
        Hey, I’m Vivian Tang!
      </span>
      <p className='my-3'>
        I’m a frontend developer with 2 years of experience crafting
        user-friendly, responsive applications using modern tools and
        frameworks.
      </p>
      {/* Highligt bullets */}
      <div className='flex justify-center my-3'>
        <ul className='flex flex-col gap-3 max-w-xl w-full'>
          {aboutHighlights.map((bullet, index) => (
            <li
              key={index}
              className='flex items-center gap-4 text-base leading-relaxed'
            >
              <Tag icon={bullet.icon} />
              <span className='font-extralight text-left'>{bullet.text}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* My approach bullets */}
      <div className='my-3 space-y-4 flex flex-col'>
        <span className='font-semibold'>:: My approach</span>

        <div className='flex justify-center'>
          <ul className='flex flex-col gap-3 max-w-xl w-full'>
            {myApproach.map((bullet, index) => (
              <li
                key={index}
                className='flex items-center gap-4 text-base leading-relaxed'
              >
                <Tag icon={bullet.icon} />
                <span className='font-extralight text-left'>{bullet.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Outside of code bullets */}
      <div className='my-3 space-y-4 flex flex-col'>
        <span className='font-semibold'>:: Outside of coding</span>
        <div className='flex justify-center'>
          <ul className='flex flex-col gap-3 max-w-xl w-full'>
            {outsideOfCoding.map((bullet, index) => (
              <li
                key={index}
                className='flex items-center gap-4 text-base leading-relaxed'
              >
                <Tag icon={bullet.icon} />
                <span className='font-extralight text-left'>{bullet.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tools I Use Section */}
      <div className='my-12'>
        <div className='gap-2 flex flex-col'>
          <h3 className='text-xl font-semibold text-shadow'>Tools I Use</h3>
          <p className='text-sm '>
            These are the main tools I use to build and design stuff.
          </p>
        </div>
        <div className='my-6 flex flex-col gap-8'>
          {/* category: FRAMEWORK */}
          <div className='flex flex-col gap-3'>
            <span>Framework:</span>
            <div className='flex flex-wrap gap-2 justify-center md:justify-start'>
              {filterStack(techCategory.FRAMEWORK).map((stack, index) => (
                <Tag
                  key={index}
                  icon={stack.icon}
                  text={stack.text}
                  className='transition-all duration-700 transform'
                />
              ))}
            </div>
          </div>
          {/* category: LANGUAGE */}
          <div className='flex flex-col gap-3'>
            <span className=''>Language:</span>
            <div className='flex flex-wrap gap-2 justify-center md:justify-start'>
              {filterStack(techCategory.LANGUAGE).map((stack, index) => (
                <Tag
                  key={index}
                  icon={stack.icon}
                  text={stack.text}
                  className='transition-all duration-700 transform'
                />
              ))}
            </div>
          </div>
          {/* category: STYLING */}
          <div className='flex flex-col gap-3'>
            <span>Styling & design:</span>
            <div className='flex flex-wrap gap-2 justify-center md:justify-start'>
              {filterStack(techCategory.STYLING).map((stack, index) => (
                <Tag
                  key={index}
                  icon={stack.icon}
                  text={stack.text}
                  className='transition-all duration-700 transform'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
