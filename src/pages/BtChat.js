import React from 'react';
import {useParams} from "react-router-dom";
//import TextField from '@mui/material/TextField';

const BtChat = () => {

  const { name } = useParams()

  return (
  <div>
    <div className="TkChat-wrapper">

      <h1>チャットページ(tomoya)</h1>
      <h2>名前・{name}</h2>

    </div>
  </div>
  );
};

export default BtChat;
