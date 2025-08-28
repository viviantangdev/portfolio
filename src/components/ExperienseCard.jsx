const ExperienseCard = ({ role, company, period, description }) => {
  return (
    <div className="card">
      <h4>{role}</h4>
      <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
        {company}, {period}
      </time>
      <p className="mt-5">{description}</p>
    </div>
  );
};

export default ExperienseCard;
