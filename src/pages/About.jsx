import ExperienseCard from '../components/ExperienseCard';
import SectionTitle from '../components/SectionTitle';
import { experiences } from '../data/experiences';

const About = () => {
  return (
    <section className='flex flex-col items-center'>
      <SectionTitle title={'About me'}/>
      <div className='space-y-3 mb-12'>
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

      <article>
          <h3>Technical expertise</h3>
          {/* TODO Add tech stack*/}
      </article>

      <article>
          <h3 className='text-center'>My journey</h3>
          <ol>
            {experiences.map((exp) => (
              <li key={exp.key}>
                <ExperienseCard
                  key={exp.company}
                  role={exp.role}
                  company={exp.company}
                  period={exp.period}
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
