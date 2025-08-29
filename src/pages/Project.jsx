import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';

const Project = () => {
  return (
    <section>
      <SectionTitle title={'Projects'} />
        <ol className='flex flex-col py-4 gap-2'>
        {projects.map((proj) => (
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
        ))}
      </ol>
    </section>
  );
};

export default Project;
