// export const Tag = ({ icon, text, className }) => {
//   const baseClasses = `
//     flex items-center justify-center
//    transform transition
//     duration-300 uppercase px-4 py-2 rounded-md
//     glass-card glass-card-hover
//     shadow-sm
//   `;

//   const tooltipClasses = `
//     mt-2 text-xs px-3 py-1 text-[var(--card-text)]

//   `;

//   return (
//     <div className={baseClasses}>
//       <span className={className}>{icon}</span>
//       {text && <div className={tooltipClasses}>{text}</div>}
//     </div>
//   );
// };

export const Tag = ({ icon, text }) => {
  return (
    <div className='relative group'>
      <div
        className=' flex items-center justify-center
          transform transition duration-300
          uppercase px-4 py-2 rounded-md
          glass-card glass-card-hover '
      >
        {icon}
      </div>

      <div
        className='absolute left-1/2 -translate-x-1/2 top-full mt-2
            px-3 py-1 text-xs rounded-md
            bg-[var(--card-bg)] text-[var(--card-text)] shadow-md
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            pointer-events-none'
      >
        {text}
      </div>
    </div>
  );
};
