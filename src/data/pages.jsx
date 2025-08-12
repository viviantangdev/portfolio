import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

export const pages = [
  { label: 'Home', href: 'home', component: <Home /> },
  { label: 'Services', href: 'services', component: <Services /> },
  { label: 'Projects', href: 'projects', component: <Projects /> },
  { label: 'Contact', href: 'contact', component: <Contact /> },
];
