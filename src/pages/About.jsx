import { techStack } from '../data/techStack';
import { Tag } from '../components/Tag';


const About = () => {
 

  return (
    <section
      id='about'
      className='flex flex-col justify-start mx-5 space-y-5 text-center lg:items-start lg:text-left lg:mx-auto lg:max-w-4xl transition-opacity duration-700'
    >
      <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-gradient-x text-shadow text-shadow transition-all duration-700 transform'>
        About me
      </h2>
      <span className='text-2xl mt-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-gradient-x text-shadow text-shadow transition-all duration-700 transform'>
        Hey, I’m Vivian Tang!
      </span>
      <p className='text-shadow mt-4 transition-all duration-700 delay-500 transform '>
        I build clean, responsive websites with a focus on user experience. I
        love learning new tools and turning ideas into real, usable things.
        Outside of coding, you’ll usually find me with a coffee, exploring new
        tech, or working on a side project.
      </p>
      {/* Tools I Use Section */}
      <div className='mt-12 space-y-2'>
        <h3 className='text-xl font-semibold text-shadow'>Tools I Use</h3>
        <p className='text-sm '>
          These are the main tools I use to build and design stuff.
        </p>
      </div>

      <div
        className='grid gap-6
    grid-cols-3 md:grid-cols-4 
    justify-center
    transition-all duration-700 transform'
      >
     {techStack.map((stack, index) => {
  const IconComponent = stack.icon; // note: use lowercase 'icon' here to match your data
  return (
    <Tag
      key={index}
      content={<IconComponent />}
      hoverContent={stack.text}
      className='transition-all duration-700 transform'
    />
  );
})}
      </div>
    </section>
  );
};

export default About;
