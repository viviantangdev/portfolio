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
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const isHomeView = useInView({ ref: homeRef });
  const isServicesView = useInView({ ref: servicesRef });
  const isProjectView = useInView({ ref: projectsRef });
  const isContactView = useInView({ ref: contactRef });

  const dropdownRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const activeSection = useActiveSection([homeRef, servicesRef, projectsRef, contactRef]);

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
          services: servicesRef,
          projects: projectsRef,
          contact: contactRef,
        }}
        views={{
          home: isHomeView,
          services: isServicesView,
          projects: isProjectView,
          contact: isContactView,
        }}
      />

      <Footer />
    </>
  );
}

export default App;
