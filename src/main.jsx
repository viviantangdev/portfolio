import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import MenuProvider from './contexts/MenuContext.jsx';
import ThemeProvider from './contexts/ThemeContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </ThemeProvider>
  </StrictMode>
);
