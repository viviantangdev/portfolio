import { Tag } from '../components/Tag';
import { services } from '../data/servicesBullets';
import { techCategory, techStack } from '../data/techStack';

const Services = () => {
  function filterStack(category) {
    return techStack.filter((tech) => tech.category === category);
  }

  return (
    <>
      <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-gradient-x text-shadow text-shadow transition-all duration-700 transform'>
        Services
      </h2>

      {/* Services bullets */}
      <div className='flex justify-center my-3'>
        <ul className='flex flex-col gap-3 max-w-xl w-full'>
          {services.map((bullet, index) => (
            <li
              key={index}
              className='flex-col items-center gap-4 text-base leading-relaxed'
            >
              <div className='flex items-center justify-center mb-2 md:justify-start'>
                <span className='text-2xl mt-10 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-gradient-x text-shadow text-shadow transition-all duration-700 transform'>
                  {bullet.icon}
                </span>
                <span className='text-2xl mt-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-gradient-x text-shadow text-shadow transition-all duration-700 transform'>
                  {bullet.title}
                </span>
              </div>
              <span className='font-extralight'>{bullet.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tools I Use Section */}
      <div className='my-12'>
        <div className='gap-2 flex flex-col'>
          <h3 className='text-xl font-semibold text-shadow'>Tools I Use</h3>
          <p className='text-sm '>The skills, tools and technologies i use. </p>
        </div>
        <div className='my-6 flex flex-col gap-8'>
          {/* category: FRAMEWORK */}
          <div className='flex flex-col gap-3'>
            <div className='flex flex-wrap gap-2 justify-center md:justify-start'>
              {filterStack(techCategory.FRAMEWORK).map((stack, index) => (
                <Tag
                  key={index}
                  icon={stack.icon}
                  text={stack.text}
                  className='transition-all duration-700 transform'
                />
              ))}
              {filterStack(techCategory.LANGUAGE).map((stack, index) => (
                <Tag
                  key={index}
                  icon={stack.icon}
                  text={stack.text}
                  className='transition-all duration-700 transform'
                />
              ))}{' '}
              {filterStack(techCategory.STYLING).map((stack, index) => (
                <Tag
                  key={index}
                  icon={stack.icon}
                  text={stack.text}
                  className='transition-all duration-700 transform'
                />
              ))}{' '}
              {filterStack(techCategory.TOOL).map((stack, index) => (
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

export default Services;
