import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import BtLogin from '../pages/BtLogin';
import TkLogin from '../pages/TkLogin';

import TkChat from '../pages/TkChat';

import StLogin from '../pages/StLogin';
import StChat from '../pages/StChat';


const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/btlogin" element={<BtLogin />} />
        <Route path="/tklogin" element={<TkLogin />} />

        <Route path="/tkchat/:name" element={<TkChat />} />

        <Route path="/stlogin" element={<StLogin />} />
        <Route path="/st/chat-page/:name" element={<StChat />} />

      </Routes>
    </Router>
  );
};

export default PageRouter;
