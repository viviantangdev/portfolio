import { FaGithub } from 'react-icons/fa6';
import { TfiNewWindow } from 'react-icons/tfi';

const ProjectCard = ({
  title,
  description,
  tags,
  liveUrl,
  GithubUrl,
  // image,
}) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className='flex space-x-1.5 py-3'>
        {tags.map((tag, index) => (
          <div key={index} className='tag'>
            <span>{tag}</span>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-3 pt-4'>
        <a
          href={liveUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='gradient-btn flex-wrap-reverse'
        >
          <div className='flex justify-center items-center space-x-2'>
            <span>Live demo</span>
            <TfiNewWindow size={23} />
          </div>
        </a>
        <a
          href={GithubUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='btn'
        >
          <div className='flex justify-center items-center space-x-2'>
            <span>Source code</span>
            <FaGithub size={25} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
