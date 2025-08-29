import AnimationFadeIn from '../components/AnimationFadeIn';
import AnimationScale from '../components/AnimationScale';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';

const Project = () => {
  return (
    <section id="projects">
      <AnimationFadeIn>

      <SectionTitle title={'Projects'} />
      </AnimationFadeIn>
        <ol className='flex flex-col gap-2'>
        {projects.map((proj) => (
          <AnimationFadeIn>
            <li key={proj.key}>
              <ProjectCard
                title={proj.title}
                description={proj.description}
                tags={proj.techStacks}
                liveUrl={proj.liveUrl}
                GithubUrl={proj.githubUrl}
                image={proj.image}
              />
            </li>
          </AnimationFadeIn>
        ))}
      </ol>
    </section>
  );
};

export default Project;
