import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { FavoritesProvider } from './context/FavoritesContext.jsx';
import { BookingProvider } from './context/BookingContext.jsx';
import './styles/base.css';
import './styles/components.css';
import './styles/pages.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <BookingProvider>
          <App />
        </BookingProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
