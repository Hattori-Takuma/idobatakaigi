import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageRouter from './routes/PageRouter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
