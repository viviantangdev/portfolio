import testImage from '../assets/test_image.jpg';
import { ProjectCard } from '../components/ProjectCard';
import { ReactIcon, TailwindIcon } from '../components/SvgIcon';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal website showcasing projects and skills.',
      tecStack: [
        { icon: <ReactIcon />, text: 'React' },
        { icon: <TailwindIcon />, text: 'Tailwind' },
        
      ],
      liveUrl: 'https:viviantangdev.netlify.app',
      githubUrl: 'https://github.com/viviantangdev/portfolio',
      imageUrl: testImage,
      imageAlt: 'Screenshot of Portfolio Website',
    },
  ];

  return (
    <
    >
      <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-gradient-x text-shadow text-shadow transition-all duration-700 transform'>
        Projects
      </h2>
      <p className='text-shadow my-10 transition-all duration-700 transform'>
        These projects demonstrate my ability to build responsive, accessible,
        and user-friendly interfaces using modern frontend technologies like
        React, Tailwind CSS, and more.
      </p>
      <div
        className={`grid gap-6 grid-cols-1 md:grid-cols-2 transition-all duration-700 transform `}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tecStack={project.tecStack}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            className='transition-all duration-700 transform'
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
