import ExperienseCard from '../components/ExperienseCard';
import SectionTitle from '../components/SectionTitle';
import { experiences } from '../data/experiences';
import { techStacks } from '../data/techStacks';

const About = () => {
  return (
    <section>
      <SectionTitle title={'About me'} />
      <div className='space-y-3'>
        <p>
          I´m a frontend developer who enjoys creating responsive, accessible
          and interactive applications that looks appealing and enjoyable for
          people to use.
        </p>
        <p>
          I´m curious and excited to learn new things - wheater its mastering
          frameworks, programm languages or finding cleaner ways to code.
        </p>
      </div>

      <article >
        <h3>Technical expertise</h3>
        {/* TODO Add tech stack*/}
        <ol className='flex justify-center py-4 gap-2 flex-wrap'>
          {techStacks.map((tech) => (
            <li key={tech.key}>
                <div className='card flex flex-col justify-center items-center gap-1.5'>
                    {tech.icon}
                    <p>{tech.name}</p>
                </div>
            </li>
          ))}
        </ol>
      </article>

      <article>
        <h3>My journey</h3>
        <ol className='flex flex-col py-4 gap-2'>
          {experiences.map((exp) => (
            <li key={exp.key}>
              <ExperienseCard
                key={exp.company}
                role={exp.role}
                company={exp.company}
                period={exp.period}
                icon={exp.icon}
                description={exp.description}
              />
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
};

export default About;
