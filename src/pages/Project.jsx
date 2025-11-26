import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';

const Project = () => {
  return (
    <section
      id='projects'
      data-aos='fade-in'
      data-aos-duration='3000'
      className='w-[90%] md:w-[80%] 2xl:w-[50%] max-w-7xl mx-auto'
    >
      <SectionTitle title={'Projects'} />

      <div className='flex flex-col gap-5 md:grid md:grid-cols-2'>
        {projects.map((proj, index) => (
          <ProjectCard
      
            key={index}
            title={proj.title}
            description={proj.description}
            tags={proj.techStacks}
            liveUrl={proj.liveUrl}
            GithubUrl={proj.githubUrl}
            image={proj.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
