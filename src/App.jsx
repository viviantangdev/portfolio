import { Footer } from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';
function App() {
  return (
    <>
      <main>
        <Home />
        <About/>
        <Project/>
        <Contact/>
      </main>
      <footer className='absolute w-full px-6 py-10 border-t text-sm text-center border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--card-text)] shadow-inner backdrop-blur-md'>
        <Footer />
      </footer>
    </>
  );
}

export default App;
