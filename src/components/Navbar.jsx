import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const navItems = [
  {
    link: 'home',
  },
  {
    link: 'about',
  },
  {
    link: 'projects',
  },
  {
    link: 'contact',
  },
];

const Navbar = ({ navOpen }) => {
  const [activeLink, setActiveLink] = useState('home');

  const handleClick = (link) => {
    setActiveLink(link);
    const targetElement = document.getElementById(link);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        root: null, // Uses the viewport as the container
        threshold: 0.7, // 60% of the section should be visible to trigger
      }
    );

    // Observe all sections with IDs
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      <ul>
        {navItems.map(({ key, link }) => (
          <li>
            <a
              href={`#${link}`}
              key={key}
              className={`nav-link ${activeLink === link ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link);
              }}
              aria-current={activeLink === link ? 'page' : undefined}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
