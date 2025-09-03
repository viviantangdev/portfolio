const ExperienseCard = ({ role, company, period, icon, description, tags }) => {
  return (
    <div className='card'>
      {icon}
      <h4>{role}</h4>
      <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
        {company}, {period}
      </time>
      <p className='mt-5'>{description}</p>
     <div className="flex flex-wrap gap-2 my-5">{tags.map((tag) => ( <div className="tag">{tag}</div>))}</div>
    </div>
  );
};

export default ExperienseCard;
