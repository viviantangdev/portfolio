const navItems = [
  { label: 'Home', href: 'home' },
  { label: 'Projects', href: 'projects' },
  { label: 'About Me', href: 'about' },
];

export const NavMenu = ({ active , onNavigate}) => {
  const handleClick = (e, id) => {
    e.preventDefault(); // Prevent adding #id to the URL
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  if(onNavigate) onNavigate();
    }
  };

  return (
    <nav className=''>
      <ul className='flex flex-col md:flex-row  gap-8 items-center justify-center px-6 py-3'>
        {navItems.map(({ label, href }) => (
          <li key={href}>
            <a
              href={`#${href}`}
              onClick={(e) => handleClick(e, href)}
              className={`
                relative px-3 py-1 uppercase text-sm font-semibold transition-colors duration-300
                ${
                  active === href
                    ? 'text-[var(--tw-accent)] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-[var(--tw-accent)]'
                    : 'text-[var(--card-text)] hover:text-[var(--tw-accent)]'
                }
              `}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
