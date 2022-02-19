import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
//import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './TkChat.css'
import { createDataInFirebase } from '../lib/firebase'



const TkChat = () => {

  const { name } = useParams()
  const navigate = useNavigate();
  const movePage = (path) => {
    navigate(`${path}`);
  }

  const createFunc = async () => {

    console.log('start')
    const res = await createDataInFirebase()
    console.log('fin', res)
  }


  return (
    <div>

      <Button
        onClick={() => movePage("/tklogin")}>戻る</Button><br />

      <div className="TkChat-wrapper">


        <h1>チャットページ(Takuma)</h1>

        <h2>名前・{name}</h2>
      </div>

      <div>
        <h1>Main画面</h1>
        <Button onClick={createFunc}>DBへ保存</Button>
      </div>



    </div>
  );
};

export default TkChat;
