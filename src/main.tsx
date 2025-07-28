import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './main.css';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <div >
    <App />
    </div>
  </React.StrictMode>
);
