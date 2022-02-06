import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
//import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TkChat = () => {

  const { name } = useParams()
  const navigate = useNavigate();
  const movePage = (path) => {
    navigate(`${path}`);
  }


  return (
    <div>

      <Button
        onClick={() => movePage("/tklogin")}>戻る</Button><br />

      <h1>たくま用チャットページ</h1>

      <h2>・{name}</h2>




    </div>
  );
};

export default TkChat;
