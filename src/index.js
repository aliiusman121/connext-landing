import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // THIS LINE IS THE IMPORTANT BIT
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
