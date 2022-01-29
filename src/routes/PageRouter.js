import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import BtLogin from '../pages/BtLogin';
import TkLogin from '../pages/TkLogin';
const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/btlogin" element={<BtLogin />} />
        <Route path="/tklogin" element={<TkLogin />} />
      </Routes>
    </Router>
  );
};

export default PageRouter;
