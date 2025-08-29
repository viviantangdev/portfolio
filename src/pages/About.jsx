import AnimationFadeIn from '../components/AnimationFadeIn';
import AnimationScale from '../components/AnimationScale';
import ExperienseCard from '../components/ExperienseCard';
import SectionTitle from '../components/SectionTitle';
import { experiences } from '../data/experiences';
import { techStacks } from '../data/techStacks';

const About = () => {
  return (
    <section>
      <AnimationFadeIn>

      <SectionTitle title={'About me'} />
      </AnimationFadeIn>
      <AnimationFadeIn>
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
      </AnimationFadeIn>

      <AnimationFadeIn>
        <article className='card'>
          <h3>Technical expertise</h3>
          <ol className='flex justify-center py-4 gap-x-6 gap-y-6 flex-wrap'>
            {techStacks.map((tech) => (
              <AnimationScale>
                <li key={tech.key}>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        {tech.icon}
                        <p className='opacity-60'>{tech.name}</p>
                    </div>
                </li>
              </AnimationScale>
            ))}
          </ol>
        </article>
      </AnimationFadeIn>

      <AnimationFadeIn>
        <article>
          <h3>My journey</h3>
          <ol className='flex flex-col py-4 gap-2'>
            {experiences.map((exp) => (
              <AnimationFadeIn>
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
              </AnimationFadeIn>
            ))}
          </ol>
        </article>
      </AnimationFadeIn>
    </section>
  );
};

export default About;
