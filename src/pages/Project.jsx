import AnimationFadeIn from '../components/AnimationFadeIn';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Project = () => {
  return (
    <section
      id='projects'
      className='w-[90%] md:w-[80%] 2xl:w-[50%] max-w-7xl mx-auto'
    >
      <AnimationFadeIn>
        <SectionTitle title={'Projects'} />
      </AnimationFadeIn>

      <div className='flex flex-col gap-5 md:grid md:grid-cols-2'>
        {projects.map((proj, index) => (
          <AnimationFadeIn key={index}>
            <ProjectCard
              title={proj.title}
              description={proj.description}
              tags={proj.techStacks}
              liveUrl={proj.liveUrl}
              GithubUrl={proj.githubUrl}
              image={proj.image}
            />
          </AnimationFadeIn>
        ))}
      </div>


    </section>
  );
};

export default Project;
