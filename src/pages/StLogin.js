import React from 'react';
import { useNavigate } from "react-router-dom";

const StLogin = () => {
  const navigate = useNavigate();
  const movePage = (path) => {
    navigate(`${path}`);
  }
  return (
    <div>
      <h1>Satake's page</h1>
      <button
        onClick={() => movePage("/st/chat-page/satake")}
      >
        login
      </button>
    </div>
  );
};

export default StLogin;