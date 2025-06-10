export const Tag = ({ content, hoverContent, className, href }) => {
  const handleClick = (e) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const baseClasses =
    'group relative flex justify-center items-center cursor-pointer transform hover:scale-[1.03] animate-fade-in opacity-0 [animation-delay:1.3s] shadow-sm shadow-slate-600 duration-300 uppercase px-4 py-2 rounded-md hover:shadow-md border border-transparent';

  const contentElement = (
    <>
      <span className={className}>{content}</span>
      {hoverContent && (
        <div
          className='
            absolute top-full left-1/2 -translate-x-1/2 mt-4
            pointer-events-none
            opacity-0 scale-95 translate-y-2
            group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-1 group-hover:pointer-events-auto
            transition
            duration-350
            ease-[cubic-bezier(0.4,0,0.2,1)]
            text-xs px-3 py-2 rounded shadow-xl z-10
            max-w-xs
            whitespace-normal
            border
            backdrop-blur-md
            bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--card-text)]
            break-words
          '
        >
          {hoverContent}
        </div>
      )}
    </>
  );

  return href ? (
    <a href={href} onClick={handleClick} className={baseClasses}>
      {contentElement}
    </a>
  ) : (
    <div className={baseClasses}>{contentElement}</div>
  );
};
