import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageRouter from './routes/PageRouter';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <PageRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
