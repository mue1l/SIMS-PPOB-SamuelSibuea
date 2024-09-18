import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './main'; // Pastikan path ini sesuai dengan lokasi file App.js

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
