import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
//import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './TkChat.css'

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

      <div className="TkChat-wrapper">


        <h1>チャットページ(Takuma)</h1>

        <h2>名前・{name}</h2>
      </div>



    </div>
  );
};

export default TkChat;
