import { navigation } from '../data/navigation';

// TODO Create and add Navbar to App.jsx
const Navbar = () => {
  return (
    <nav aria-label='Main navigation' className='navbar'>
      <span className='gradient-text'>VT</span>
      <ol className='flex gap-4'>
        {navigation.map((nav) => (
          <li key={nav.key}>
            <a href={nav.link}>{nav.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Navbar;
