import testImage from '../assets/test_image.jpg';
import { ProjectCard } from '../components/ProjectCard';
import { useInView } from '../hooks/useInView';

const Projects = () => {
  const [ref, isInView] = useInView();

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal website showcasing projects and skills.',
      tecStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://your-portfolio-link.com',
      githubUrl: 'https://github.com/yourusername/portfolio-site',
      imageUrl: testImage,
      imageAlt: 'Screenshot of Portfolio Website',
    },
    {
      title: 'Portfolio Website',
      description: 'My personal website showcasing projects and skills.',
      tecStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://your-portfolio-link.com',
      githubUrl: 'https://github.com/yourusername/portfolio-site',
      imageUrl: testImage,
      imageAlt: 'Screenshot of Portfolio Website',
    },
    {
      title: 'Portfolio Website',
      description: 'My personal website showcasing projects and skills.',
      tecStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://your-portfolio-link.com',
      githubUrl: 'https://github.com/yourusername/portfolio-site',
      imageUrl: testImage,
      imageAlt: 'Screenshot of Portfolio Website',
    },
    {
      title: 'Portfolio Website',
      description: 'My personal website showcasing projects and skills.',
      tecStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://your-portfolio-link.com',
      githubUrl: 'https://github.com/yourusername/portfolio-site',
      imageUrl: testImage,
      imageAlt: 'Screenshot of Portfolio Website',
    },
    {
      title: 'Portfolio Website',
      description: 'My personal website showcasing projects and skills.',
      tecStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://your-portfolio-link.com',
      githubUrl: 'https://github.com/yourusername/portfolio-site',
      imageUrl: testImage,
      imageAlt: 'Screenshot of Portfolio Website',
    },
  ];

  return (
    <section
      ref={ref}
      className={`flex flex-col justify-start mx-5 space-y-5 text-center lg:items-start lg:text-left lg:mx-auto lg:max-w-4xl transition-opacity duration-700 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h2
        className={` text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-gradient-x text-shadow text-shadow transition-all duration-700 transform ${
          isInView
            ? 'animate-fade-in [animation-delay:0.1s] opacity-100'
            : 'opacity-0'
        }`}
      >
        Projects
      </h2>
      <p
        className={`text-shadow mt-10 transition-all duration-700 delay-500 transform ${
          isInView
            ? 'animate-fade-up [animation-delay:0.5s] opacity-100'
            : 'opacity-0'
        }`}
      >
        These projects demonstrate my ability to build responsive, accessible,
        and user-friendly interfaces using modern frontend technologies like
        React, Tailwind CSS, and more.
      </p>
      <div
        className={`grid gap-6 grid-cols-1 md:grid-cols-2 transition-all duration-700 transform ${
          isInView
            ? 'animate-fade-up [animation-delay:0.9s] opacity-100'
            : 'opacity-0'
        }`}
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
            className={`transition-all duration-700 transform ${
              isInView
                ? `animate-fade-up [animation-delay:${
                    0.8 + index * 0.2
                  }s] opacity-100`
                : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
