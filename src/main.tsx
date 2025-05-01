import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globals';
import App from './App';
import { ThemeProviderContext } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderContext>
      <App />
      <GlobalStyles />
    </ThemeProviderContext>
  </React.StrictMode>
);
