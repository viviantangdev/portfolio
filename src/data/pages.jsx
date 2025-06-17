import About from '../pages/About';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

export const pages = [
  { label: 'Home', href: 'home', component: <Home /> },
  { label: 'About Me', href: 'about', component: <About /> },
  { label: 'Projects', href: 'projects', component: <Projects /> },
];
