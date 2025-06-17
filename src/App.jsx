import { useRef } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { useMenu } from './contexts/MenuContext';
import { pages } from './data/pages';
import { useActiveSection } from './hooks/useActiveSection';
import { useClickOutside } from './hooks/useClickOutside';
import { useInView } from './hooks/useInView';

function App() {
  const { menuOpen, toggleMenu, closeMenu } = useMenu();

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  const isHomeView = useInView({ ref: homeRef });
  const isAboutView = useInView({ ref: aboutRef });
  const isProjectView = useInView({ ref: projectsRef });

  const dropdownRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const activeSection = useActiveSection([homeRef, aboutRef, projectsRef]);

  // Close dropdown when clicking outside, excluding toggle button
  useClickOutside(dropdownRef, closeMenu, [toggleButtonRef]);

  return (
    <>
      <Header
        activeSection={activeSection}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        dropdownRef={dropdownRef}
        toggleButtonRef={toggleButtonRef}
      />

      <Main
        pages={pages}
        refs={{
          home: homeRef,
          about: aboutRef,
          projects: projectsRef,
        }}
        views={{
          home: isHomeView,
          about: isAboutView,
          projects: isProjectView,
        }}
      />

      <Footer />
    </>
  );
}

export default App;
