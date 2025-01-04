import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Rotas from './rotues';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas />
    <Toaster
      position="bottom-right"
      reverseOrder={false}
    />
  </React.StrictMode>
);
