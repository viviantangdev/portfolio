export const Tag = ({ label }) => {
  return (
    <div className='animate-fade-in opacity-0 [animation-delay:1.3s] backdrop-blur-md bg-cyan-400/10 text-slate-100/60 font-light shadow-sm duration-300 uppercase text-xs px-4 py-2 rounded-md'>
      {label}
    </div>
  );
};
