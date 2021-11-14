import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Normalize from 'react-normalize';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Normalize />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
