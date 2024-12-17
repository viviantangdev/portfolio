import Header from './components/Header';
import { About } from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Home from './sections/Home';
import Projects from './sections/Projects';

function App() {
  return (
    <>
    
      <Header />
      <main className="">
        <Home />
        <About/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
