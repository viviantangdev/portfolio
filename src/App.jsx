import { Footer } from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
function App() {
  return (
    <>
      <main>
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
