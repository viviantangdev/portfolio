import { DartIcon, FlutterIcon } from '../components/SvgIcon';
import { Tag } from '../components/Tag';

const About = () => {
  const tecStack = [
    {
      icon: <DartIcon />,
      text: 'Dart',
    },
    {
      icon: <FlutterIcon />,
      text: 'Flutter',
    },
  ];

  return (
    <section
      id='about'
      className='flex flex-col justify-start mx-5 space-y-5 text-center lg:items-start lg:text-left lg:mx-auto lg:max-w-4xl transition-opacity duration-700'
    >
      <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-gradient-x text-shadow text-shadow transition-all duration-700 transform'>
        About me
      </h2>
      <p className='text-shadow mt-10 transition-all duration-700 delay-500 transform'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
        fugit quaerat maiores aperiam laborum culpa facere amet architecto,
        dolorem praesentium nihil reprehenderit soluta corporis. Adipisci quidem
        error eveniet mollitia ad?
      </p>
      <div
        className={`grid gap-6 grid-cols-4 transition-all duration-700 transform `}
      >
        {tecStack.map((stack, index) => (
          <Tag
            key={index}
            content={stack.icon}
            hoverContent={stack.text}
            className='transition-all duration-700 transform'
          />
        ))}
      </div>
    </section>
  );
};

export default About;
