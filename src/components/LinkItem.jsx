export const LinkItem = ({ icon, label, href }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='cursor-pointer transform hover:scale-[1.03] inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700 bg-slate-800/80 text-white text-sm font-light uppercase backdrop-blur-md shadow-md transition-all duration-300 group hover:bg-slate-700/70 hover:shadow-lg hover:border-slate-600 opacity-0 animate-fade-up [animation-delay:1.1s]'
    >
      <span className='text-lg text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_6px_#22d3ee]'>
        {icon}
      </span>
      <span className='tracking-wide transition-all duration-300 group-hover:text-cyan-100 group-hover:tracking-wider'>
        {label}
      </span>
    </a>
  );
};
