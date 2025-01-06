import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

// Cria a raiz da aplicação React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro do StrictMode para destacar problemas potenciais no código
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
