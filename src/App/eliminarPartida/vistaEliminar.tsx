import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { EliminarPartida } from './componente/EliminarPartida';
import '/app.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <EliminarPartida />
    </BrowserRouter>
  </React.StrictMode>
);