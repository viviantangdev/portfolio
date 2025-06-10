import { useRef, useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { NavMenu } from './components/NavMenu';
import { ThemeSwitch } from './components/ThemeSwitch';
import { useActiveSection } from './hooks/useActiveSection';
import { useClickOutside } from './hooks/useClickOutside';
import { useThemeMode } from './hooks/useThemeMode';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { LogoTitle } from './components/LogoTitle';

function App() {
  const [isDark, setIsDark] = useThemeMode(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const dropdownRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const activeSection = useActiveSection([homeRef, projectsRef, aboutRef]);

  // Close dropdown when clicking outside, excluding toggle button
  useClickOutside(dropdownRef, () => setMenuOpen(false), [toggleButtonRef]);

  return (
    <>
      <header className='fixed top-0 left-0 w-full z-50 px-6 py-3 bg-[var(--card-bg)] backdrop-blur-md shadow-md border-b border-[var(--card-border)]'>
        {/* Desktop header */}
        <div className='hidden md:flex justify-between items-center'>
          <LogoTitle/>
          <div className='flex-1'>
            <NavMenu active={activeSection} />
          </div>
          <ThemeSwitch
            isDark={isDark}
            toggleTheme={() => setIsDark((prev) => !prev)}
          />
        </div>

        {/* Mobile header */}
        <div className='flex items-center justify-between md:hidden'>
          {/* <span className='text-lg font-bold'>My Site</span> */}
          <LogoTitle/>
          <button
            ref={toggleButtonRef}
            onClick={() => setMenuOpen((prev) => !prev)}
            className='w-8 h-8 flex items-center justify-center transition-transform cursor-pointer'
            aria-label='Toggle menu'
          >
            <FaBars
              className={`
      absolute transition-all duration-300
      ${
        menuOpen
          ? 'opacity-0 scale-90 rotate-45'
          : 'opacity-100 scale-100 rotate-0'
      }
    `}
            />
            <FaXmark
              className={`
      absolute transition-all duration-300
      ${
        menuOpen
          ? 'opacity-100 scale-100 rotate-0'
          : 'opacity-0 scale-90 rotate-45'
      }
    `}
            />
          </button>
        </div>

      {/* Mobile dropdown */}
<div
  ref={dropdownRef}
  className={`
    fixed top-[60px] right-0 h-[calc(100vh-60px)] w-1/2
    bg-[var(--card-bg)] backdrop-blur-md border-l border-[var(--card-border)]
    flex flex-col gap-6 items-center pt-6
    transition-transform duration-300 ease-in-out
    ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-100'}
    z-50
  `}
>
          <NavMenu
            active={activeSection}
            onNavigate={() => setMenuOpen(false)}
          />
          <ThemeSwitch
            isDark={isDark}
            toggleTheme={() => setIsDark((prev) => !prev)}
          />
        </div>
      </header>
      <main>
        <section id='home' ref={homeRef}>
          <Home />
        </section>
        <section id='projects' ref={projectsRef}>
          <Projects />
        </section>
        <section id='about' ref={aboutRef}>
          <About />
        </section>
      </main>
    </>
  );
}

export default App;
