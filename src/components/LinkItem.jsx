export const LinkItem = ({ icon, label, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative flex items-center justify-center gap-2
        glass-card glass-card-hover
        cursor-pointer px-4 py-4 rounded-md text-sm font-light uppercase
        transition-all duration-300 animate-fade-up opacity-0 [animation-delay:1.1s]
      "
    >
      <span
        className="
          text-lg text-[var(--card-title)] transition-all duration-300
          group-hover:scale-110 group-hover:text-[var(--tw-accent)]
          group-hover:drop-shadow-[0_0_6px_var(--tw-accent)]
        "
      >
        {icon}
      </span>

      <span
        className="
        hover:font-semibold  tracking-wide text-[var(--card-text)] transition-all duration-300
          group-hover:text-[var(--tw-accent-text)] group-hover:tracking-wider
        "
      >
        {label}
      </span>
    </a>
  );
};