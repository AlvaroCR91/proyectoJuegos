import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CrearJuego } from './componente/CrearJuego';
import '/app.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CrearJuego />
    </BrowserRouter>
  </React.StrictMode>
);