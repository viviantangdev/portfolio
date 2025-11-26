import { FaGithub, FaGlobe } from 'react-icons/fa6';

const ProjectCard = ({
  title,
  description,
  tags,
  liveUrl,
  GithubUrl,
  image,
}) => {
  return (
    <div data-aos='fade-up' data-aos-duration='1000' className='projectCard'>
      <img src={image} alt={title} className='h-50 w-full object-cover' />
      <div className='p-5 flex flex-col justify-between md:h-[350px]'>
        <div className='h-full'>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className='flex flex-wrap overflow-auto gap-1.5 py-5'>
            {tags.map((tag, index) => (
              <div key={index} className='tag'>
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <a
            href={liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='gradient-btn flex justify-center items-center w-full'
          >
            <div className='flex justify-center items-center space-x-2'>
              <span>Live</span>
              <FaGlobe size={25} />
            </div>
          </a>
          <a
            href={GithubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='btn flex justify-center items-center w-full'
          >
            <div className='flex justify-center items-center space-x-2'>
              <span>Code</span>
              <FaGithub size={25} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
