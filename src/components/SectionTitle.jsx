const SectionTitle = ({ title }) => {
  return (
    <div className='relative inline-block p-4 space-y-2'>
      <h2 className='gradient-text'>{title}</h2>
      <span className='absolute w-full left-0 right-0 h-1 gradient-underline rounded-full'></span>
    </div>
  );
};

export default SectionTitle;
