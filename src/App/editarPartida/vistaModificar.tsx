import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ModificarDatos } from './componentes/ModificarDatos';
import '/app.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModificarDatos />
    </BrowserRouter>
  </React.StrictMode>
);