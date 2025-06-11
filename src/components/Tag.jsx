export const Tag = ({ content, hoverContent, className }) => {
  
  const baseClasses = `
    flex flex-col items-center justify-center
   cursor-pointer transform transition
    duration-300 uppercase px-4 py-2 rounded-md
    glass-card glass-card-hover
    shadow-sm
  `;

  const tooltipClasses = `
    mt-2 text-xs px-3 py-1 text-[var(--card-text)]
  
  `;

  return (
    <div className={baseClasses}>
      <span className={className}>{content}</span>
      {hoverContent && <div className={tooltipClasses}>{hoverContent}</div>}
    </div>
  );
};