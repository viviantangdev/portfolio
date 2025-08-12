import { FaCode, FaDisplay } from 'react-icons/fa6';
import { LinkItem } from './LinkItem';
import { Tag } from './Tag';

export const ProjectCard = ({
  title,
  description,
  tecStack,
  imageUrl,
  imageAlt,
  liveUrl,
  githubUrl,
}) => {
  return (
    <article
      className='min-h-[300px] bg-[var(--card-bg)] border border-[var(--card-border)]
    backdrop-blur-md rounded-lg overflow-hidden shadow-lg transition-shadow duration-700 ease-in-out flex flex-col transform '
    >
      <img
        src={imageUrl}
        alt={imageAlt || `${title} screenshot`}
        className='w-full h-48 object-cover'
      />

      <div className='p-6 flex flex-col flex-grow'>
        <h3 className='font-lato uppercase tracking-widest text-lg text-[var(--card-title)] mb-2'>
          {title}
        </h3>

        <p className='text-sm text-[var(--card-text)] flex-grow'>
          {description}
        </p>
        <div className='flex flex-wrap gap-2 mt-8 justify-center md:justify-start'>
          {tecStack.map((tech, index) => (
            <Tag key={index} icon={tech.icon} text={tech.text}/>
          ))}
        </div>

        <div className='mt-16 flex justify-between'>
          <LinkItem icon={<FaDisplay />} label='Live demo' href={liveUrl} />
          <LinkItem icon={<FaCode />} label='Github' href={githubUrl} />
        </div>
      </div>
    </article>
  );
};
