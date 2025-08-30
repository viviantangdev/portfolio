import AnimationFadeIn from '../components/AnimationFadeIn';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';

const Project = () => {
  return (
    <section id="projects">
      <AnimationFadeIn>

      <SectionTitle title={'Projects'} />
      </AnimationFadeIn>
        <ol className='flex flex-col gap-5 '>
        {projects.map((proj, index) => (
          <AnimationFadeIn key={index}>
            <li >
              <ProjectCard
                title={proj.title}
                description={proj.description}
                tags={proj.techStacks}
                liveUrl={proj.liveUrl}
                GithubUrl={proj.githubUrl}
              />
            </li>
          </AnimationFadeIn>
        ))}
      </ol>
    </section>
  );
};

export default Project;
