import { navigation } from '../data/navigation';

// TODO Create and add Navbar to App.jsx
const Navbar = () => {
  return (
    <nav aria-label='Main navigation' className='navbar'>
      <span className='gradient-text pointer-events-none'>VT</span>
      <ol className='flex gap-1'>
        {navigation.map((nav) => (
          <li key={nav.key}>
            <a href={nav.link} className='gradient-text-hover px-4 py-1'>
              {nav.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Navbar;
