import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import degli stili di Bootstrap e Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'; // File per eventuali stili CSS personalizzati

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);