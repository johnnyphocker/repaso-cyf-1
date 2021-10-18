import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ApiContext from './context/ApiContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiContext>
        <App />
      </ApiContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();